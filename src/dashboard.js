import React, { Component } from 'react';

import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import API         from './API';
import Average     from './components/Children/Average';
import DboardHead  from './components/Children/DboardHead';
import FoodLog     from './components/Children/FoodLog'
import SearchBar   from './components/Children/SearchBar';
import SearchDspl  from './components/Children/SearchDspl';
import UserProfile from './components/Children/UserProfile';

// Material-ui custom themes =========================================================
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
  TextField:
  {"width":"100%",},
});


export default class Dashboard extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        brand: '',
        displayResults: 'none',
        food: '',
        foodToAdd: [],
        hasBtn: 'block',
        item: '',
        logged: false,
        results: [],
        showResults: false,
        sugar: 0,
        top: '',
        user: 'Carol Jenkins'
      }
    this.inputChange  = this.inputChange.bind(this);
    this.searchFood   = this.searchFood.bind(this);
    this.handleLog    = this.handleLog.bind(this);
    this.onAddFood    = this.onAddFood.bind(this);
    };

// landing page api call for searchbar on landing page and dashboard =========
  searchFood = () => {
// test query string  ==== https://api.nutritionix.com/v1_1/search/apple?results=0:20&fields=item_name,brand_name,nf_sugars&appId=5234f7f1&appKey=40a5d6ab8411eb1e9d9f23f601944842
    const currQuery = this.state.item + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=';

    API.search(currQuery)
      .then(res => {
        this.setState({ 
          results: res.data.hits,
          showResults: true,
          displayResults: 'block',
          top: -5 + 'px', 
        });
        console.log('in searchFood function display state is: ', this.state.displayResults)
      })
      .catch(err => console.log(err));
  };

// Search results-well is set to display/no-display ==========================
closeResults = () => {
  this.setState({ 
    showResults: !this.state.showResults,
    })
  }

// Log food-search items to database and user dashboard ======================
  handleLog = (user, item_name, brand_name, nf_sugars, date, logged, foodLog) => {
    let d = new Date();
    let sdate = '';
    date += d.getMonth() + 1 + '/';
    date += d.getDate() + '/';
    date += d.getFullYear();

    user = 'user';
    logged = true;

    API.postSaved(user, item_name, brand_name, nf_sugars, date, logged);
    alert('logged item ' + item_name + ' ' + brand_name + ' ' + nf_sugars + ' grams on ' + date);

    // calls food log for dashboard render ==================================
    this.onAddFood()
  };

// collects the food item to be logged on dashboard ==================
  onAddFood = (foodSelect) => {
    console.log("clicking add food from list")
    console.log("in onAddFood function click food pass back Result: ", foodSelect)
    // const foodLog = this.state.foodToAdd.concat({foodSelect})   
    var foodArray = this.state.foodToAdd;
    foodArray.push(foodSelect); 
    this.setState({
      foodToAdd: foodArray
    })
    console.log(foodArray);
    console.log("food we will send to log well: ", this.state.foodToAdd)
  }

// input value state change for all input fields ==============================
  inputChange = (value, key ) => {
    this.setState({
      [key]: value
    })
    console.log('value: ',value, 'key: ' ,key)
  };


 
  
  render() {
    // searchResults shows/hides search results display on 'X' click in upper right corner
    // let showResults = this.state.showResults ? this.setState({ top: -5 + 'px' }) : this.setState({ top: -2000 + 'px' })
    console.log('results diplay? ',this.state.displayResults)
    console.log('this it top position: ',this.state.top)
    console.log('showResults is: ',this.state.showResults)
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>

      <div>
        <DboardHead />
      </div>

      <div className="dashBrdSearch">
        <SearchBar 
          searchFood = { this.searchFood }
          inputChange = { this.inputChange } />
          
        {/*<div className="dashBrdresults" style={{top: this.state.top, display: this.state.displayResults}}>*/}
        <div className="dashBrdresults" style={{'maxHeight': this.state.showResults ? '200px': '0', display: this.state.displayResults}}>
          <div className="xResultsClose" onClick={this.closeResults} >
            &times;
          </div>
          <div>
            { this.state.showResults ? ( <SearchDspl
            top = { this.state.top }
            hasBtn = { this.state.hasBtn }
            onAddFood = { this.onAddFood }
            results = { this.state.results } /> ) : (this.state.results ) }
          </div>
        </div>
      </div>

      <div className="dividerToday">Today</div>

      <div className="flexRow reportContainer">
        <div className="ResultLogWell">
          <div className="downArrow"></div>
          <FoodLog 
            foodToAdd = { this.state.foodToAdd }/>
        </div>
        <div className="sugrStatWell">
          <FoodLog foodToAdd = { this.state.foodToAdd }/>

        </div>
        <div className="chartWell">
                        
        </div> 
      </div>
      </div>
      </MuiThemeProvider>
     
    );
  }
}

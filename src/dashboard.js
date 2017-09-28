import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import API from './API';
import Average from './components/Children/Average';
import Graph from './components/Children/Graph';
import DboardHead from './components/Children/DboardHead';
import FoodLog from './components/Children/FoodLog';
import SearchBar from './components/Children/SearchBar';
import SearchDspl from './components/Children/SearchDspl';
import UserProfile from './components/Children/UserProfile';

// Material-ui custom themes =========================================================
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
  TextField: { width: '100%' }
});

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      currSugar: 0,
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
      user: 'Carol Jenkins',
      sugrIntake: ''
    };
    this.inputChange = this.inputChange.bind(this);
    this.searchFood = this.searchFood.bind(this);
    this.handleLog = this.handleLog.bind(this);
    this.onAddFood = this.onAddFood.bind(this);
  }

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
          top: -5 + 'px'
        });
        //       console.log('in searchFood function display state is: ', this.state.displayResults)
      })
      .catch(err => console.log(err));
  };

  // Search results-well is set to display/no-display ==========================
  closeResults = () => {
    this.setState({
      showResults: !this.state.showResults
    });
  };

  // Log food-search items to database and user dashboard ======================
  handleLog = (user, item_name, brand_name, nf_sugars, date, logged, foodLog) => {
    let d = new Date();
    let sdate = '';
    date += d.getMonth() + 1 + '/';
    date += d.getDate() + '/';
    date += d.getFullYear();

    API.postSaved(user, item_name, brand_name, nf_sugars, date, logged);
    alert('logged item ' + item_name + ' ' + brand_name + ' ' + nf_sugars + ' grams on ' + date);

    // calls food log for dashboard render ==================================
    //this.onAddFood()
    this.setState({
      logged: true
    });
  };

  // collects the food item to be logged on dashboard ==================
  onAddFood = foodSelect => {
    // this grabs the current clicked search selection and push to foodArray
    var foodArray = this.state.foodToAdd;
    foodArray.push(foodSelect);
    let sugar;
    if (this.state.currSugar == 0) {
      sugar = this.state.currSugar;
    } else {
      sugar = 0;
    }

    console.log('this is a foodArray: ', foodArray);
    for (var i = 0; i < foodArray.length; i++) {
      console.log('Food item ' + i + ' is ');
      console.log(foodArray[i]);
      console.log(foodArray[i].nf_sugars);
      sugar = sugar + parseFloat(foodArray[i].nf_sugars);
    }

    console.log('this is SUGAR**********:', sugar);
    this.setState({
      currSugar: sugar,
      logged: true
    });
  };

  // input value state change for all input fields ==============================
  inputChange = (value, key) => {
    this.setState({
      [key]: value
    });
    // console.log('value: ',value, 'key: ' ,key)
  };

  render() {
    // searchResults shows/hides search results display on 'X' click in upper right corner
    // let showResults = this.state.showResults ? this.setState({ top: -5 + 'px' }) : this.setState({ top: -2000 + 'px' })

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <div>
            <DboardHead user={this.state.user} />
          </div>

          <div className="dashBrdSearch">
            <SearchBar searchFood={this.searchFood} inputChange={this.inputChange} />

            {/*<div className="dashBrdresults" style={{top: this.state.top, display: this.state.displayResults}}>*/}
            <div
              className="dashBrdresults"
              style={{ maxHeight: this.state.showResults ? '200px' : '0', display: this.state.displayResults }}
            >
              <div className="xResultsClose" onClick={this.closeResults}>
                &times;
              </div>
              <div>
                <SearchDspl
                  top={this.state.top}
                  hasBtn={this.state.hasBtn}
                  onAddFood={this.onAddFood}
                  results={this.state.results}
                />
              </div>
            </div>
          </div>

          <div className="dividerToday" style={{ display: this.state.logged ? 'block' : 'none' }}>
            Today
          </div>

          <div className="flexRow reportContainer">
            <div
              className="ResultLogWell"
              div
              className="sugrShamerWell"
              style={{ display: this.state.logged ? 'block' : 'none' }}
            >
              <FoodLog foodToAdd={this.state.foodToAdd} />
            </div>
            <div className="sugrShamerWell" style={{ display: this.state.logged ? 'block' : 'none' }}>
              <Average sugar={this.state.currSugar} />
            </div>
            <div
              className="chartWell"
              style={{
                display: this.state.logged ? 'block' : 'inline-block',
                marginLeft: this.state.logged ? '0' : '33%'
              }}
            >
              <Graph />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

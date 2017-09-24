import React, { Component } from 'react';

import axios            from 'axios';
//import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import DboardHead  from './components/Children/DboardHead';
import FoodLog     from './components/Children/FoodLog'
import SearchBar   from './components/Children/SearchBar';
import SearchDspl  from './components/Children/SearchDspl';
import UserProfile from './components/Children/UserProfile';

// import Graph from '../src/funponents/Graph';
// import Main from '../src/funponents/Main';


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Search: {
        SearchItem:'',
        item_name:'',
        foodType: [],
        showResults: false,
        
      },
      foodToAdd: [],
      foodId:'',
    }
    this.inputChange  = this.inputChange.bind(this);
    this.clickSearch  = this.clickSearch.bind(this);
    this.onShowResult = this.onShowResult.bind(this);
    this.onAddFood    = this.onAddFood.bind(this);
  }

  // input value state change for all input fields ==============================
  inputChange = (value, key ) => {
    this.setState({
      [key]: value
    })
    console.log('value: ',value, 'key: ' ,key)
  };

// landing page api call for searchbar on landing page and dashboard =========
clickSearch = () => {
  // primary funda   const APIKEY = '5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711';
  // secondary const APIKEY = 'f6780a72&appKey=07084d23b49f810b82b76dd92b7c4a7e';
  const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
  const APIKEY = 'f6780a72&appKey=07084d23b49f810b82b76dd92b7c4a7e';
  const queryURL =  BASEURL + this.state.SearchItem + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=' + APIKEY;

  return axios.get(queryURL)
    .then(resp => {
      this.setState({
        foodType: resp.data.hits,
      })  
    console.log('food by name response: ',resp.data.hits); 
    this.mapAllFood(this.state.foodType);  
    this.setState({ showResults: true });
    console.log("this is show state: ",this.state.showResults)
    this.onShowResult();
  }) 
} 

// shows results from search on landing page and/or dashboard =========
  onShowResult = () => {
    this.setState({
      top: 0,
    });
  }

 // collects the food item to be logged on dashboard ==================
  onAddFood = (foodSelect) => {
    console.log("foodResult: ", foodSelect)
    const foodLog = this.state.foodToAdd.concat([foodSelect])    
    this.setState({
      foodToAdd: foodLog
    })
}


    // =====================================================================

  mapAllFood = (foods, i) => {
    foods.map(food => {
      console.log('object: ', this.state.foodType)
      console.log("Item fields: ",food.fields);
      console.log('i: ', i);
      console.log("Item Name: ",food.fields.item_name);
      console.log("Brand Name: ",food.fields.brand_name);
      console.log("sugars: ",food.fields.nf_sugars+"g");
      console.log("serving size: ",food.fields.nf_serving_size_qty);
      console.log("id: ",food._id);
      console.log('****************************');
    })
  }


  render() {
    console.log(' this.props.backside inputchange: ',  this.props )
    return (
      <MuiThemeProvider>

      <div>
      	<DboardHead />

          <div className="searchWrapper dashBrdSearch">
            <SearchBar 
              clickSearch = { this.clickSearch }
              inputChange = { this.inputChange } />
          </div>
          <div className="resultsWrapper">
              { this.state.showResults ? ( 
                <SearchDspl
                  top = { this.state.top }
                  onAddFood = { this.onAddFood }
                  foodType = { this.state.foodType } /> ) : (null )}
          </div>
          <div className="dividerOr">Today</div>
          <FoodLog 
            foodToAdd = { this.state.foodToAdd } />
        <UserProfile />
      	
      </div>
      </MuiThemeProvider>
    );
  }
}


 {/*                 buttonAdd = { <button className="AddBtn" onClick={ () => { onAddFood(foodLog) } }> add </button> } */}
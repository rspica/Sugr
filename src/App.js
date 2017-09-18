import React, { Component } from 'react';

import axios            from 'axios';

import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {fade}               from 'material-ui/src/styles/colorManipulator';
// import SugrTheme from './utils/uiTheme.js';
import {teal900, 
        cyan700, cyan500, 
        white, darkBlack, fullBlack,
        pinkA200, 
        grey100, grey300, grey400, grey500,} from 'material-ui/styles/colors';

import Header       from './components/Children/Header';
import Logo         from './components/Children/Logo';
import LpSearch     from './components/Children/LpSearch';
import CurrentModal from './components/Children/CurrentModal';
import SearchDspl   from './components/Children/SearchDspl';
import routes from './components/routes';
// import Api          from './utils/api'

// Material-ui custom themes
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
  palette: {
    primary1Color: teal900,
    primary2Color: cyan700,
    primary3Color: grey400,
    accent1Color: pinkA200,
    accent2Color: grey100,
    accent3Color: grey500,
    textColor: teal900,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    // disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: cyan500,
    // clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  TextField:
  {"width":"100%",},
});

//=============================================
let Food = (props => {
  return (
    <div>Food item: {props.food.item_name}</div>
  )
})
//============================================
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: {
        fullname:'',
        email:'',
        password:'',
        profilePict:'',
      },
      Search: {
        SearchItem:'',
        foodType: [],
        foodName: [],
      },
      CurrentModal: null,
    };
      
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
    this.closeModal = this.closeModal.bind(this)
  }

// modal activation sign-in / signup / no display
  handleClick = (clickVal) => {
    console.log(this)
    this.setState({
      CurrentModal: clickVal
    })
  }

  closeModal = () => {
    this.handleClick("null");
  }

// input value state change for all input fields 
    inputChange = (value, key ) => {
      this.setState({
        [key]: value
      })
      console.log('value: ',value, 'key: ' ,key)
    };

// landing page api call for search
clickSearch = () => {
  const BASEURL = 'https://api.nutritionix.com/v1_1/search/';
  const APIKEY = '5234f7f1&appKey=c6da7cb3302759d1e20f3793daa4b711';
  const foodSearch = this.state.SearchItem
  const queryURL =  BASEURL + this.state.SearchItem + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=' + APIKEY;

  return axios.get(queryURL)
    .then(resp => {
      this.setState({
        foodType: resp.data.hits,
        foodName: resp.data.hits[0].fields.item_name
      })  
           console.log('food by name response: ',resp.data.hits); 
          })   
    } 
 



    render() {
      
      console.log('in render showing overall state: ',this.state)
      console.log('in render foodtypes result response: ',this.state.Search.foodType);
      console.log('mapping response array: ', 'xxx')
      console.log('in render foodnames result response: ',this.state.Search.foodName);
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header
            handleClick  = { this.handleClick } 
            CurrentModal = { this.state.CurrentModal } />
          <CurrentModal 
            handleClick  = { this.handleClick }
            closeModal   = { this.closeModal }
            inputChange  = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } />
          <LpSearch 
            clickSearch = { this.clickSearch }
            inputChange = { this.inputChange } />
          
        <div>
          <h1>search results</h1>
          <div>food: </div>
        </div>
        </div>
        </MuiThemeProvider>
      );
    }
  }


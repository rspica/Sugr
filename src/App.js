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
//import SearchDspl   from './components/Children/SearchDspl';
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

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname:'',
      email:'',
      password:'',
      profilePict:'',
      search:'',
      CurrentModal: null,
      SearchItem:'',
      food: [],
    };
      
    this.inputChange = this.inputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.clickSearch = this.clickSearch.bind(this);
  }

// modal activation sign-in / signup / no display
  handleClick = (clickVal) => {
    console.log('clicking')
    console.log(this)
    this.setState({
      CurrentModal: clickVal
    })
  }

// landing page api call for search

// input value state change for all input fields 
    inputChange = (value, key ) => {
      this.setState({
        [key]: value
      })
      console.log('value: ',value, 'key: ' ,key)
    };

  
    render() {
      console.log(this.state)
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Header
            handleClick = { this.handleClick } 
            CurrentModal = { this.state.CurrentModal }/>
          <LpSearch 
            clickSearch = { this.clickSearch }
            inputChange = { this.inputChange }/>
          <CurrentModal 
            handleClick = { this.handleClick }
            inputChange = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } />

        </div>
        </MuiThemeProvider>
      );
    }
  }




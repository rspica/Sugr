import React, { Component } from 'react';
import getMuiTheme          from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider     from 'material-ui/styles/MuiThemeProvider';
import {teal900}            from 'material-ui/styles/colors';

import Header       from './components/Children/Header';
import Logo         from './components/Children/Logo';
import LpSearch     from './components/Children/LpSearch';
import CurrentModal from './components/Children/CurrentModal';

// MAterial0ui color themes
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal900,
    textColor: teal900
  },
});

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fullname:'',
        email:'',
        password:'',
        profilePict:'',
        CurrentModal: null
      };
      
      this.inputChange = this.inputChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (clickVal) => {
      console.log('clicking')
      console.log(this)
      this.setState({
        CurrentModal: clickVal
      })
    }
  
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
          <Logo bgImage = { './components/assets/images/orange.png' }/>
          <LpSearch />
          <CurrentModal 
            handleClick = { this.handleClick }
            inputChange = { this.inputChange }
            CurrentModal = { this.state.CurrentModal } />

        </div>
        </MuiThemeProvider>
      );
    }
  }


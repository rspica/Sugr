import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Main from '../src/funponents/Main';
import DboardHead from './components/Children/DboardHead';
import SearchBar from './components/Children/SearchBar';
import UserProfile from './components/Children/UserProfile';

// Material-ui custom themes
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif'
});

export default class Dashboard extends Component {
  render() {
    // console.log(' this.props.backside inputchange: ', this.props);
    return (
      <MuiThemeProvider>
        <div>
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

import React, { Component } from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DboardHead from './components/Children/DboardHead';
import UserProfile from './components/Children/UserProfile';

import Graph from '../src/funponents/Graph';
import Main from '../src/funponents/Main';

// Material-ui custom themes
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif'
});

export default class Dashboard extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <DboardHead />
          <UserProfile />
          <Main />
        </div>
      </MuiThemeProvider>
    );
  }
}

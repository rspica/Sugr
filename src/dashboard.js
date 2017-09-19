import React, { Component } from 'react';

import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import DboardHead  from './components/Children/DboardHead';
import UserProfile from './components/Children/UserProfile';

// Material-ui custom themes
const muiTheme = getMuiTheme({
  fontFamily: 'Monserrat, sans-serif',
});

export default class Dashboard extends Component {
  render() {
    return (

      <MuiThemeProvider>
      <div>
      	
      	<DboardHead />
        <UserProfile />

      	
      </div>
      </MuiThemeProvider>
    );
  }
}

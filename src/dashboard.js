import React, { Component } from 'react';

import DboardHead  from './components/Children/DboardHead';
import UserProfile from './components/Children/UserProfile';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
      	
      	<DboardHead />
        <UserProfile />

      	
      </div>
    );
  }
}

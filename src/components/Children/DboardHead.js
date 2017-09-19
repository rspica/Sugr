import React, { Component } from 'react';
import { Link } from "react-router";

import FlatButton from 'material-ui/FlatButton';

export default class DboardHead extends Component {
  constructor(props) {
    super(props);
    this.clickSignOutn = this.ClickSignOut.bind(this);
  }

  
  ClickSignOut = () => {
    <FlatButton 
    containerElement={<Link to="/Dashboard" />} 
    linkButton={true} />
    }


  render() {
    console.log("header prop ",this.props)
    return (

    <div className="headWrapperDashBrd"> 
        <div className="dashLogo">
            <h1>Sugr</h1>
        </div>
    <div className="row">
        <div className="navLabel">
          <button 
            containerElement={<Link to="/" />} 
            linkButton={true} >
          <h4> Log Out </h4></button>
        </div>
    </div>
   </div>

    );
  }
}

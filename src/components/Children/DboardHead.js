import React, { Component } from 'react';
import { Link } from "react-router";

import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

const header = {
    button: {
      '&:hover': {
        background: 'white'
      },
    },
    avatar: {
        margin: 0,
    },
}

const WrappedLink = () => {
    return (
      <button>
        <Link  /><h4> Log Out </h4>
      </button>
    )
  }

export default class DboardHead extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log("header prop ",this.props)
    return (
    <div className="headWrapperDashBrd"> 
        <ListItem
            disabled={true}
            leftAvatar={
                <Avatar
                size={35}
                style={ header.avatar }
                >
                R
                </Avatar>
            }
    >
      Image Avatar with username
    </ListItem>
        <div className="dashLogo">
            <h1>Sugr</h1>
        </div>
        
    <div className="row">
        <div className="navLabel">
            <WrappedLink to="/"/>
        </div>

        <ul className="navLabel">
          <li><Link to="/">Log Out</Link></li>
        </ul>

        <FlatButton 
            label="Sign In" 
            style={ header.button }
            containerElement={<Link to="/" />} 
            linkButton={true} />
   </div>
   </div>

    );
  }
}

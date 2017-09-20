import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


const LpSearchStyle = {
  btnStyle: {
    color: 'white',
    backgroundColor: '#90CAF9',
    primary: true,
    textTransform: 'capitalize',
    width: '30%',
    height: '45',
  },
  inputStyle: {
    backgroundColor: '#F5F5F5',
    borderColor: 'c',
    borderStyle: 'solid',
    borderWidth: '1px',
    padding: '10px,',
    'input::placeholder': {
      color: 'red',
    }
  }
};


export default class LpSearch extends Component {
  render() {
    console.log("LpSearch prop ",this.props)
    console.log(' this.props.clickSearch: ',  this.props.clickSearch )
    return (
    
    <div>
      <img className="bgImage" src={require( '../assets/images/orange.png' )} />
      <div className="searchWrapper"> 
        <div className="logo">
          <h1>Sugr</h1>
        </div>
        <div className="searchBar inputStyle">
          <input 
            id="search" 
            type="text" 
            placeholder='Search for food eg. "bananas", Snickers Bar"' required 
            onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'SearchItem')}}
            style={ LpSearchStyle.inputStyle }
          />
          <FlatButton 
            label = "Show Me"
            style = { LpSearchStyle.btnStyle }
            onClick = { this.props.clickSearch }
          />
        </div>
      </div>
    </div>
    );
  }
}


import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';


const SearchStyle = {
  btnStyle: {
    color: 'white',
    backgroundColor: '#90CAF9',
    primary: true,
    textTransform: 'capitalize',
    width: '30%',
    height: '60',
  },
  inputStyle: {
    backgroundColor: '#F5F5F5',
    padding: '10px 20px',
    borderWidth: '0px',
    height: '100%',
  }
};

export default class SearchBar extends Component {
    render() {

      return (

        <div className="searchBar">
        <input 
        id="search" 
        type="text" 
        placeholder='Search for food eg. "bananas", Snickers Bar"' required 
        onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'SearchItem')}}
        style={ SearchStyle.inputStyle }
        />
        <FlatButton 
        label = "Show Me"
        style = { SearchStyle.btnStyle }
        onClick = { this.props.clickSearch }
        />
        </div>

      )
    }
}
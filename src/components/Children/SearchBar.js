import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';

const SearchStyle = {
    btnStyle: {
        color: 'white',
        backgroundColor: '#90CAF9',
        primary: true,
        textTransform: 'capitalize',
        width: '30%',
        height: '60'
    },
    inputStyle: {
        backgroundColor: '#F5F5F5',
        padding: '10px 20px',
        borderWidth: '1px',
        borderRadius: '3px 0 0 3px',
        'input::placeholder': {
            color: 'red'
        }
    }
};

export default ({ inputChange, searchFood }) => {
//     console.log('input value: ',this.refs)
//   console.log("Search Bar prop ",this.props)
  return (
    <div className="searchBar dBoardSearch">
        <input 
        id="search" 
        type="text" 
        placeholder='Search for food eg. "bananas", Snickers Bar"' required 
        onChange = { (ev) => { inputChange(ev.currentTarget.value, 'item')} }
        style={ SearchStyle.inputStyle }
        />

        <FlatButton 
        label = "Show Me"
        style = { SearchStyle.btnStyle }
        onClick = { searchFood }
        />
    </div>
  );
}

/* 
{!item ? ( alert('Please enter a food to search ')) : ({ searchFood })}
 */
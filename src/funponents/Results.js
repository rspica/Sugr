import React from 'react';
import './App.css';
import './Main.js';
import API from './API.js';
//connect all this to SUBMIT button/page

//I think I have to break out the handleLog function and do it on this page
//child element needs to pass states an create an object to send to mongo

const Results = ({ results, handleFormSubmit, showResults, handleLog, user }) => (
  <ul className="list-group search-results" style={{ borderStyle: showResults ? 'solid' : 'none' }}>
    {results.map(result => {
      const { item_name, brand_name, nf_sugars } = result.fields;

      handleLog = event => {
        event.preventDefault();
        let d = new Date();
        let date = '';
        date += d.getMonth() + 1 + '_';
        date += d.getDate() + '_';
        date += d.getFullYear();

        user = 'user';

        API.postSaved(user, item_name, brand_name, nf_sugars, date, true);
        alert('logged item ' + item_name + ' ' + brand_name + ' ' + nf_sugars + ' grams' + ' on ' + date);
      };

      return (
        <li key={result._id} className="list-group-item" style={{ display: showResults ? 'block' : 'none' }}>
          <h5 className="contains">{item_name}</h5>

          <h5>{brand_name}</h5>
          <h5>{nf_sugars}g sugar</h5>
          <button
            onClick={handleLog}
            style={{
              color: 'black',
              display: 'inline',
              float: 'right',
              border: 'solid lightgrey',
              marginTop: '-40px',
              paddingLeft: '4px'
            }}
          >
            log
          </button>
        </li>
      );
    })}
  </ul>
);

export default Results;

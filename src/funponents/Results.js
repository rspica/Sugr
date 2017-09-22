import React from 'react';
import './App.css';
import './Main.js';
import API from './API.js';

const Results = ({ results, handleFormSubmit, showResults, handleLog, user }) => (
  <ul className="list-group search-results" style={{ borderStyle: showResults ? 'solid' : 'none' }}>
    {/*.........Destructuring assignment draws out just what's needed from results array http://exploringjs.com/es6/ch_destructuring.html#sec_overview-destructuring....*/}

    {results.map(result => {
      const { item_name, brand_name, nf_sugars } = result.fields;

      handleLog = event => {
        event.preventDefault();
        let d = new Date();
        let date = '';
        date += d.getMonth() + 1 + '/';
        date += d.getDate() + '/';
        date += d.getFullYear();

        user = 'user';

        API.postSaved(brand_name, date, item_name, true, nf_sugars, user);
        alert('logged item ' + item_name + ' ' + brand_name + ' ' + nf_sugars + ' grams on ' + date);
      };

      {
        /*...Map items iterating through results & at each pass assigning a new key by grabbing a unique identifier like _id from the results object and rendering a list item*/
      }

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

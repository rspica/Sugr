import React, { Component } from 'react';
// import './assets/css/main.css';


export default class LpSearch extends Component {
  render() {
    return (
    
    <section className="searchWrapper"> 
        <form className="inputStyle">
            <input id="Search" type="text" placeholder="Search" required />
            <button className="btnSearch" type="submit">Submit</button>
        </form>

        <form action="">
          <div className="embed-submit-field">
            <input type="text" placeholder="Write something"/>
            <button type="submit">Send</button>
          </div>
        </form>
      </section>

    );
  }
}
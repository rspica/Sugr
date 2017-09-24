import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Results from './Results.js';
import Saved from './Saved.js';
import Average from './Average.js';
import Chart from './Chart.js';
import Graph from './Graph.js';
import API from './API.js';
import { Modal } from 'react-bootstrap';

class Main extends Component {
  state = {
    //this is the search term though I use item later differently. Unwise choice but in too deep.
    item: '',
    //food is the food selected or logged. item_name in the results object. I know...
    food: '',
    //grams of sugar stored as zero default because it's a number in the Mongoose Schema
    sugar: 0,
    //brand_name in the results object
    brand: '',
    //array of results from search, parsed later on
    results: [],
    //toggle 'logged' off
    logged: false,
    //toggled off until needed in conditional render of search results. This function lives later on the results page but the conditions under which it would be revealed are on this, the <Main />, page
    showResults: false,
    //Carol Jenkins is a name everyone universally happens to invoke during Improv games and sketch comedy
    user: 'Carol Jenkins'
  };

  componentDidMount() {
    this.searchFood();
    //Below are self-reminders to make some functions based on userdata, like:
    // API.searchUser(userdata[userdata.length-1].user);
    // this.setState({ user: res.data.user });
  }

  searchFood = () => {
    // test query string  ==== https://api.nutritionix.com/v1_1/search/apple?results=0:20&fields=item_name,brand_name,nf_sugars&appId=5234f7f1&appKey=40a5d6ab8411eb1e9d9f23f601944842

    const currQuery = this.state.item + '?results=0:20&fields=item_name,brand_name,nf_sugars&appId=';

    API.search(currQuery)
      .then(res => {
        this.setState({ results: res.data.hits });
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    //============== Updating the input's state
    this.setState({
      [name]: value,
      showResults: false
    });
  };

  handleFormSubmit = event => {
    //===========Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    //===========validation checks inside the event listener===========================
    //probably don't need to reset state so much and so literally but this all helped me "think" through the app
    if (this.state.item === '') {
      alert('No food item was entered');
      this.searchFood();
      this.setState({
        item: '',
        food: '',
        sugar: 0,
        brand: '',
        results: [],
        logged: false,
        showResults: false,
        user: 'Carol Jenkins'
      });
      //==================Important that showResults toggles to true. Show results is not on this compoent but the command to do so IS, so the call to it is being passed here========================================
    } else {
      this.setState({
        food: [],
        sugar: [],
        item: '',
        brand: [],
        results: [],
        logged: false,
        showResults: true,
        name: 'Carol Jenkins'
      });
      this.searchFood('sugar');
      alert(`Searching food item: ${this.state.item}`);
    }
  };

  /*...Form is where search input happens on the Dashboard. handleFormSubmit properties are passed here because the states set therein, like showResults, determine the conditions of render later on...*/

  render() {
    return (
      <div className="container">
        <Modal />
        <div className="row">
          <div className="col-md-12" id="form">
            <Form
              value={this.state.value}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              item={this.state.item}
            />
          </div>
        </div>
        <div className="row">
          {/**<Results/> is where results render on the Dashboard. handleFormSubmit properties are passed here because the states set therein, like showResults, determine the conditions of render later on...*/}
          <div className="col-md-12" id="resultWell">
            <div
              className="panel"
              id="results"
              style={{
                marginTop: this.state.showResults ? '-65px' : '-10px',
                borderColor: this.state.showResults ? 'lightgrey' : 'transparent'
              }}
            >
              <div className="panel-body">
                {/*user name can be passed here to become part of database object, associating a logged food with a user*/}
                <Results
                  results={this.state.results}
                  showResults={this.state.showResults}
                  handleFormSubmit={this.handleFormSubmit}
                  user={this.state.user}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {/**<Average /> is where a lot of Math happens upon conditional render. handleFormSubmit properties are passed here because the states set therein, like showResults, determine the conditions of render later on...*/}
          <div className="col-md-3" id="average">
            <Average
              results={this.state.results}
              showResults={this.state.showResults}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
          {/**<Charts /> is where charts render on the Dashboard. May someday be an API call. handleFormSubmit properties are passed here because the states set therein, like showResults, determine the conditions of render later on...*/}
          <div className="col-md-3" id="charts">
            <Chart results={this.state.results} showResults={this.state.showResults} />
          </div>

          <div
            className="col-md-3"
            id="graphWell"
            style={{
              marginTop: this.state.showResults ? '4px' : '-80px'
            }}
          >
            <Graph
              results={this.state.results}
              showResults={this.state.showResults}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>

          <div
            className="col-md-3"
            id="savedWell"
            style={{
              marginTop: this.state.showResults ? '-70px' : '-10px'
            }}
          >
            {/*dunno yet what's happening here*/}
            <Saved
              value={this.state.value}
              handleInputChange={this.handleInputChange}
              postResponse={this.postResponse}
            />
          </div>
        </div>
      </div>
    );
  }
}

export { Main as default };

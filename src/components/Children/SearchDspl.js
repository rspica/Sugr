import React, { Component } from 'react';

import SearchResult from './SearchResult';

export default class SearchDspl extends Component {

// const Results = ({ results, handleFormSubmit, showResults }) => (
//   <ul className="list-group search-results">
//     {results.map(result => {
//       const { item_name, brand_name, nf_sugars } = result.fields;

    render() {
    console.log("Results prop ",this.props)
    return (
        <div>
        <SearchResult 
            className="resultWell"
            results={this.state.results}
            showResults={this.state.showResults}
            handleSubmit={this.handleSubmit}  
        />
        </div>
    )
    };
}

import React, { Component } from 'react';

import SearchResult from './SearchResult';

export default class SearchDspl extends Component {

    render() {
        console.log('prpos indise of searchDspl: ', this.props)
        return (
            <div className="resultWell">
                <div>
                    <h1>search results</h1>
                </div>

                <div>
                { this.props.foodType ? (
                    <ul>
                        { this.props.foodType.map(foodItem => {
                            var { item_name, brand_name, nf_sugar, nf_serving_size_qty } = foodItem.fields
                                return  <li key={foodItem._id}>
                                        <h2> { foodItem.fields.item_name } { foodItem.fields.brand_name }</h2>
                                        <h2>serving size: { foodItem.fields.nf_serving_size_qty }</h2>
                                        <h2>sugars: { foodItem.fields.nf_sugars } <span>g</span></h2>
                                        </li>
                        }
                        )}
                    </ul>
                ) : (
                    <h3>No Results to Display</h3>
                    )}
                </div>     
            </div>
        )
    }
}
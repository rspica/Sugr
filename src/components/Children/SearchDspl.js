import React from 'react';

const styles = {
      typeColor: '#FF8A80',
}

export default ({ onAddFood, buttonAdd, foodType, top }) => {

    return (
        <div className="resultWell" 
            style = {{top: top }}>
            <div className="resutTitle">
                <h1>Search Results</h1>
            </div>
                
            <div>
                { foodType ? (
                    <ul>
                        { foodType.map( (foodItem, i) => {
                            var { item_name, brand_name, nf_sugars, nf_serving_size_qty } = foodItem.fields;
                            var foodLog = [];
                                return  <li key={foodItem._id} { ...foodLog.push(foodItem.fields) } ref={ (li) => { this.foodToAdd = li } }>
                                            <h2 className="foodItem"><strong>{i + 1} { brand_name }:</strong> { item_name }</h2>
                                            <div className="foodStat">
                                                <h2>serving size: { nf_serving_size_qty }  {' '}
                                                  |  <span style = { styles.typecolor } >sugars: { nf_sugars } g</span></h2>
                                                  { buttonAdd }
                                                  <button className="AddBtn" onClick={ () => { onAddFood(foodLog) }}> add </button>
                                                  
                                            </div>
                                        </li>
                        }
                        )}
                    </ul>
                ) : (
                    <h3>No Results to Display</h3>
                    )}
                </div>  
                <div>

                </div> 
            </div>
        )
}
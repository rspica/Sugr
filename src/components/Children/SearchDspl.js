import React from 'react';


const AnimStyle = {
    transition: 'top 2.5s ease-in-out',
  };

  const styles = {
      display:'',
  }
  

  export default ({ onAddFood, results, top, hasBtn }) => {
    // console.log('top indise of searchDspl: ', top)
    // console.log('onAddFood indise of searchDspl: ', onAddFood)
    // console.log('results indise of searchDspl: ', results)
    // console.log('hasBtn indise of searchDspl: ', hasBtn)
        return (
            <div className="resultWell" 
                style = {{ ...AnimStyle, top: top } }>
                <div className="resultTitle">
                    <h1>Search Results</h1>
                </div>
                
                <div className="resultContainer">
                { results ? (
                    <ul>
                        { results.map(foodItem => {
                            var { item_name, brand_name, nf_sugars, nf_serving_size_qty } = foodItem.fields
                            var foodLog = { item_name: item_name,
                                            brand_name: brand_name,
                                            nf_sugars: nf_sugars,
                                            nf_serving_size_qty: nf_serving_size_qty,
                                            };
                                return  <li key={foodItem._id}>
                                            <div className="flexRow separator">
                                                <div className="resultGroup"> 
                                                <h2 className="foodItem"><strong>{ foodItem.fields.brand_name }</strong> { foodItem.fields.item_name }</h2>
                                                <h2 className="foodStat">serving size: { foodItem.fields.nf_serving_size_qty }  {  }
                                                |  sugars: { foodItem.fields.nf_sugars } <span>g</span></h2>
                                                </div>
                                                <button className="addBtn" style={ {display:hasBtn} } onClick={ () => { onAddFood(foodLog) }}> add </button>
                                            </div>
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
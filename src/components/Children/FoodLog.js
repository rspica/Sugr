import React from 'react';

const styles = {
    typeColor: '#FF8A80',
}
export default ( { foodToAdd } ) => {

    console.log('foodlog props: ', foodToAdd)

    return (
        <div>
            <ul>
            { foodToAdd.map((food, i) => {
                var { item_name, brand_name, nf_sugars, nf_serving_size_qty } = food.i;
                        var foodLog = [];
                            return  <li key={i}> 
                                        <h2 className="foodItem"><strong>{i + 1} { food.i.brand_name }:</strong> { food.i.item_name }</h2>
                                            <div className="foodStat">
                                                <h2>serving size: { nf_serving_size_qty }  {' '}
                                                |  <span style = { styles.typecolor } >sugars: { nf_sugars } g</span></h2>
                                            </div>
                                    </li>
                })
            }
            </ul>
        </div>            
    )
}
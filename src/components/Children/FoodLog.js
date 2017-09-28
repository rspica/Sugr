import React from 'react';

const styles = {
    color: '#FF8A80',
    fontSize: '.9em'
}
export default ( { foodToAdd } ) => {

    console.log('foodlog props: ', foodToAdd)

    return (
        <div>
            <ul>
            { foodToAdd.map((food, i) => {
                var { item_name, brand_name, nf_sugars, nf_serving_size_qty } = food;
                            return  <li className="logEntry flexRow" key={i}> 
                                <div className="itemEntry">
                                        <h2 className="foodItem" style = { {fontSize: .7 + 'em'} }>{i + 1}. { food.brand_name }: { food.item_name }</h2>
                                        <h2><strong><span className="foodStat StyleNuge" style = { styles } > sugars: { nf_sugars } g</span></strong></h2>
                                </div>
                                        <button className="removeBtn"> &times; </button>
                                    </li>
                })}
            </ul>
        </div>            
    )
}
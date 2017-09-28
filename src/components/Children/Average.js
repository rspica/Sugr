import React from 'react';

let sugarTotal ;
let newSugar = 0;
let newTotal = 0;
let test;
let sugar  = 0;

let Tsugar = 0;
//connect all this to SUBMIT button/page
export default ({ foodToAdd }) => {
    const { nf_sugars } = foodToAdd
    console.log('foodtoadd is passing looking like this: ',foodToAdd) //is the object of data:  0: {item_name: "Apple - 1 extra small (2-1/2" dia)", brand_name: "USDA", nf_sugars: 10.49, nf_serving_size_qty: 1}
    console.log('foodtoadd is passing object. notation sugar: ',foodToAdd.nf_sugars) //undefined
    console.log('foodtoadd is passing destructured sugar: ',nf_sugars) //undefined
    console.log('Object.values(an_obj))', Object.values(foodToAdd)) //is the object of data:  0: {item_name: "Apple - 1 extra small (2-1/2" dia)", brand_name: "USDA", nf_sugars: 10.49, nf_serving_size_qty: 1}

foodToAdd.forEach( function (Item) {
        sugar = Item.nf_sugars;
        Tsugar = sugar;
        newTotal += Tsugar;
        return newTotal

    })
console.log('testxxx: ', newTotal); // actual click value

console.log('total sugars: ',Math.round(newTotal += Tsugar)) // doubles the first value and adds second click value 

let sugarCount = parseFloat(newTotal += Tsugar)

console.log('WTF total sugars: ',sugarCount) //double the added value

//*Justa buncha Math. passed from the search results pulled from the front end--the API. There will eventually be numbers from the db. */
    return(
        <div>
            <h1 shamer Title>Current daily total:</h1>
                    <div>
                        <div className="intakeWrapper">
                            <h4 className="sugrIntake">{ Math.round(newTotal += Tsugar) }<span className="smlGram">g</span></h4>
                        </div>
                        <h4 className="sugrDivide"></h4>
                        <h4 className="sugrBenchmrk">25<span className="smlGram">g</span></h4>
                    </div>
        </div>
    )
}
import React from 'react';


//connect all this to SUBMIT button/page
export default ({ foodToAdd }) => {
   console.log('foodtoadd is passing looking like this: ',foodToAdd)

//*Justa buncha Math. passed from the search results pulled from the front end--the API. There will eventually be numbers from the db. */}
    return (
        <div className="">
        {results.map(result => {
            /******just parsing sugars for these purposes. Ideally would be getting numbers from an axios call to the database---geting user's week's worth of logged sugar grams************/
            const { nf_sugars } = result.fields;
        <div>
            <h5>{parseFloat(nf_sugars * 35 / 7)} is how much eating this 5x per day would total. </h5>
            <h5>That's {parseFloat(Math.floor(nf_sugars * 35 / 7 - 25))} grams more than the daily allowance{' '}</h5>
            <h5>It's a total of {parseFloat((nf_sugars * 35 / 7 - 25) * 365 * 4)} pure sugar calories per year.</h5>
            <h5>Which, if that's above your daily caloric needs,{'\n'}potentially amounts to {Math.floor((nf_sugars * 35 / 7 - 25) * 365 * 4 / 3500)} pounds per year!</h5>
        </div>
    );
}



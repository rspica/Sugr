import React from 'react';


//connect all this to SUBMIT button/page
export default ({ foodToAdd }) => {
   console.log('foodtoadd is passing looking like this: ',foodToAdd)

//*Justa buncha Math. passed from the search results pulled from the front end--the API. There will eventually be numbers from the db. */
    return(
        <div>
            <h1>Sugr Shamer results</h1>
                { foodToAdd.map((select, i) => {
                    /******just parsing sugars for these purposes. Ideally would be getting numbers from an axios call to the database---geting user's week's worth of logged sugar grams************/
                    const { nf_sugars } = select;
                    var sugarTotal = nf_sugars + sugarTotal;
                    return <div key={i}>
                            <h4 className="shameTxt">{(nf_sugars * 35 / 7)} is how much eating this 5x per day would total. </h4>
                            <h4>That's {parseFloat(Math.floor(nf_sugars * 35 / 7 - 25))} grams more than the daily allowance{' '}</h4>
                            <h4>It's a total of {parseFloat((nf_sugars * 35 / 7 - 25) * 365 * 4)} pure sugar calories per year.</h4>
                            <h4>Which, if that's above your daily caloric needs,{'\n'}potentially amounts to {Math.floor((nf_sugars * 35 / 7 - 25) * 365 * 4 / 3500)} pounds per year!</h4>
                        </div>
                    }
                )}
        </div>
    )
}
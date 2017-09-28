import React from 'react';

//connect all this to SUBMIT button/page
export default ({ sugar }) => {
    var sugarConsumed = Math.round(parseFloat(sugar))
    console.log(sugar)

//*Justa buncha Math. passed from the search results pulled from the front end--the API. There will eventually be numbers from the db. */
    return(
        <div>
            <h1 shamer Title>Current sugar consumed</h1>
                    <div className="statContainer">
                        <div className="intakeWrapper">
                            <h4 className="sugrIntake">{ sugarConsumed }<span className="smlGram">g</span></h4>
                        </div>
                        <h4 className="sugrDivide"></h4>
                        <h4 className="sugrBenchmrk">25<span className="smlGram">g</span></h4>
                    </div>
                    <div className="Shamecontainer" style={{ display: (sugarConsumed > 25) ? 'block' : 'none' }}>
                    <button className="shameBtn">❕</button>
                    <div className="dot"></div>
                    <div className="pulse"></div>
                    
                    </div>
        </div>
    )
}
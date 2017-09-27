import React, { Component } from 'react';
import { Link } from 'react-router';


const styles = {
  button: '',
  typeColor: '#FF8A80',
  avatar: {
    background: 'tomato',
  },
  
};

export default () =>  {

    console.log('header prop ', this.props);
    return (
      <div className="headWrapperDashBrd">
        <div className="UserAvatar" style= { styles. avatar }>
          
        </div>
     <div className="dashLogo">
         <h1>Sugr</h1>
     </div>
       
     <div className="flexRow"> 
       <ul className="navLabel">
         <li><Link to="/">Log Out</Link></li>
       </ul>
     </div>
      </div>
    );
}

import React from 'react';
import { Link } from 'react-router';


export default ({ user }) =>  {

    return (
      <div className="headWrapperDashBrd">
        <div className="avatarContainer flexRow">
          <img className="userImg" src={require( '../assets/images/carol-mayo-jenkins-5197.jpg' )} alt={ 'user avatar or image' } />
          <h1>{ user }</h1>
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

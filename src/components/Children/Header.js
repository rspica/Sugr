import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.clickSignIn = this.ClickSignIn.bind(this);
    this.clickSignUp = this.ClickSignUp.bind(this);
  }

  
  ClickSignIn = () => {
    this.props.handleClick("SignIn")
    }
  
  
  ClickSignUp = () => {
    this.props.handleClick("SignUp")
  }

  render() {
    console.log("header prop ",this.props)
    return (

   <div className="headWrapper"> 
      <div className="navContainer row">
        <div className="navLabel">
          <button 
            onClick = { this.clickSignIn } //currentModal = SignIn
            id="btn-Login btnLogin">
          <h4> Log in </h4></button>
        </div>

        <div className="navLabel signUpBtn">
          <button 
            onClick = { this.clickSignUp } //currentModal = SignUp
            id="btn-SignUp btnSignUp">
          <h4> Sign up </h4></button>
        </div>
      </div>
   </div>

    );
  }
}
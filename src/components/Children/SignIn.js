import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.closeSignIn = this.closeSignIn.bind(this);
  }
  closeSignIn = () => {
    console.log('clicking close in signIn')
    this.props.handleClick("null");
  }

  render() {
    console.log('signIn: ',this.props.CurrentModal)
    console.log("signIn prop ",this.props)

    return (

        <div className="signInModal">
          <div className="modalForm">

            <div className="modalContent">
              <span 
                onClick = { this.closeSignIn }
                className = "xClose">&times;</span>
            

              <div className="welcome">
                <h1>Welcome to Sugr</h1>
              </div>

              <div className="errHandle">
                <span id="error"></span>
              </div>

              <div className="inputWrapper">
              <form>
        <TextField 
          name="email"
          hintText="email"
          floatingLabelText="Email"
          onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')} }
        />
        </form>
                <div className="inputStyle">
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="Email address" 
                    required 
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')} }
                    />
                </div>

                <div className="inputStyle">
                  <input 
                  id="password" 
                  type="password" 
                  placeholder="Password" 
                  required 
                  onChange={ (ev) => {this.props.inputChange(ev.currentTarget.value, 'password')} }
                  />
                </div>
              </div>

              <div className="Btn submit-LogIn modalBtn boxStyle">
                <button 
                  id="btnLogin"
                  >
                <h3 className="navLabel">Log in</h3></button>
              </div>

              <div className="dividerOr">or</div>

              <div className="Btn btn-SignUp modalBtn boxStyle">
                <button id="btnSignUp">
                <h3 className="navLabel">Sign me up</h3></button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}


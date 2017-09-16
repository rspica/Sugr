import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.closeSignUp = this.closeSignUp.bind(this);
  }

  closeSignUp = () => {
    console.log('clicking close in signIn')
    this.props.handleClick("null");
  }

  state = {
    fullName:'',
    fullNameErr:'',
    email:'',
    emailErr:'',
    profilePict:'',
    profilePictErr:'',
    password:'',
    passwordError:'',
    confPass:'',
    confPassErr:''
  };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
  };

  ClickSignUp = () => {
    this.props.handleClick("SignUp")
  }

  render() {
    console.log('signUp: ',this.props.CurrentModal)

    return (
        <div className="signUpModal">
            <div className="modalForm">
              <div className="modalContent">
                <span
                  onClick = { this.closeSignUp }
                  className = "xClose">&times;</span>
                <div className="welcome">
                    <h1>Join Us!</h1>
                </div>
                <div className="errHandle">
                  <span id="error"></span>
                </div>
                <form>
                  <TextField
                    name="fullName"
                    hintText="Full name"
                    floatingLabelText="Full name"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'fullName')} }
                    errorText={this.state.fullNameErr}
                  /><br />

                  <TextField
                    name="gender"
                    hintText="Gender"
                    floatingLabelText="Gender"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'gender')} }
                    errorText={this.state.genderErr}
                  /><br />

                  <TextField
                    name="email"
                    hintText="Email"
                    floatingLabelText="Email"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'email')} }
                    errorText={this.state.emailErr}
                  /><br />

                  <TextField
                    name="profilePict"
                    hintText="Profile picture link"
                    floatingLabelText="Profile picture"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'profilePict')} }
                    errorText={this.state.profilePictErr}
                  /><br />

                  <TextField
                    name="password"
                    hintText="Password"
                    floatingLabelText="Password"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'password')} }
                    errorText={this.state.passwordErr}
                    type="password"
                  /><br />

                  <TextField
                    name="confPass"
                    hintText="Confirm Password"
                    floatingLabelText="Confirm password"
                    onChange = { (ev) => {this.props.inputChange(ev.currentTarget.value, 'confPass')} }
                    errorText={this.state.confPassErr}
                    type="password"
                  /> <br />

                  <RaisedButton label="Submit" onClick = { (e) => this.onSubmit(e) } primary />
                </form>
              </div>
            </div>
          </div>
         );
        }
      };


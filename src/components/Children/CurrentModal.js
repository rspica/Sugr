import React, { Component } from 'react';

import SignIn  from './SignIn';
import SignUp2 from './SignUp2';

export default class CurrentModal extends Component {

    render() {
        console.log('in Current Conditions');

        if (this.props.CurrentModal === 'SignIn') {
            console.log('ModalName: ',this.props.CurrentModal)
            console.log('currentModal clickhandle: ',this.handleClick)
            return <SignIn 
                        CurrentModal = { this.props.CurrentModal } 
                        handleClick =  { this.props.handleClick }
                        inputChange =  { this.props.inputChange } />;
        } else if (this.props.CurrentModal === 'SignUp') {
            return <SignUp2 
                        CurrentModal = { this.props.CurrentModal } 
                        handleClick =  { this.props.handleClick }
                        inputChange =  { this.props.inputChange } />;
        } else {
            return null;
        }
    }
}

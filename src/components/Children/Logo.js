import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    console.log (this.props.bgImage)
    return (

      <div className="logo">
        <img className="bgImage" src={require( this.props.bgImage )} style={{width:'100%'}} />
        <h1>Sugr</h1>
      </div>

    );
  }
}

import React from 'react';

const Form = props => (
  <div className="form-group">
    <h3 style={{ color: '#fd746a' }}>Enter A Search:</h3>

    <form className="form">
      <input onChange={props.handleInputChange} value={props.item} name="item" type="text" placeholder="Food Item" />
      <button onClick={props.handleFormSubmit} id="submitter" style={{ color: '#fd746a' }}>
        Show Me
      </button>
    </form>
    <h3 style={{ color: '#fd746a', marginTop: '40px' }}>Then select a brand name below:</h3>
  </div>
);

export default Form;

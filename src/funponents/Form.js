import React from 'react';

const Form = props => ({
  render() {
    return (
      <div className="form-group">
        <form className="form">
          <input
            onChange={props.handleInputChange}
            value={props.item}
            name="item"
            type="text"
            style={{
              backgroundColor: '#F5F5F5',
              padding: '10px 20px',
              borderWidth: '1px',
              borderRadius: '3px 0 0 3px',
              width: '100%'
            }}
            placeholder="Search for food eg. &quot;bananas&quot;, Snickers Bar&quot;"
            required
          />
        </form>
        <button
          className="btn btn-primary"
          onClick={props.handleFormSubmit}
          id="submitter"
          style={{ backgroundColor: '#90CAF9', color: 'white', width: '10%', height: '45', float: 'right' }}
        >
          Show Me
        </button>
        <h3 style={{ color: '#fd746a', marginTop: '40px' }}>Then select a brand name below:</h3>
      </div>
    );
  }
});

export default Form;

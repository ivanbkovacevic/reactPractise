import React, { Component } from 'react';

const ValidationComponent = (props) => {
    return (
      <div>
          <p>
      { props.tl >= 5 ? 'Text long enough' : 'Text to short' }
          </p>
      </div>
    )
};

export default ValidationComponent;
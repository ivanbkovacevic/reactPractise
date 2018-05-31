import React from 'react';

const Docs = (props) => {
    return (
        <div>
              <h1>Hello, {props.name}</h1>
              <button>{props.name}</button>
        </div>
    );
};

export default Docs;
import React from 'react';

const V = (props) => {
    return (
        <div onClick={props.uradinesto}>
           {props.lis} 
           <input type="text" onClick={props.ispisiinput}/>
        </div>
    );
};

export default V;
import React from 'react';

const I = (props) => {
    return (
        <div >
           <input type="text" onChange={props.ispisiinput}/>
           <p>{props.nekosranje}</p>
        </div>
    );
};

export default I;
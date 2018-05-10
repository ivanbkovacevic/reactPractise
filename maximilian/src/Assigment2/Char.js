import React, { Component } from 'react';

const style={
    display : 'inline-block',
    padding : '16px',
    textalign : 'centar',
    margin:'16px',
    border: '1px solid black'

}


const Char = (props) =>{   
    return (
    <div style={style} onClick={props.clicked} >
    {props.character}
    </div>
    );
}

export default Char;
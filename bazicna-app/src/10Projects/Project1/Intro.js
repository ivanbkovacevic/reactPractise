import React from 'react';

const Intro = (props) => {
    return (
        <div>
            <h2>Intro kurcine/{props.kita}- burek sa sirom i sa {props.sastojak}</h2>
            <h3>i to hocu {props.brbureka} bureka</h3>
        </div>
    );
};

export default Intro;
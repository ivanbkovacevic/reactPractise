import React from 'react';

const SamoBoja = (props) => {
    let idBBoje = props.idBojeZaSamoBoja;
    let style={
        color:props.bojaSlova
    };
console.log(idBBoje+"samoboja");

    return (
        <div>
            <h3  onClick={()=>props.duplirajId(idBBoje)} style={style}>{props.imeBoje} -samo boja-</h3>
            <h2>ID boje je :{props.idBojeZaSamoBoja} </h2>
            <h2>{props.dupliraniId}</h2>
        </div>
    );
};

export default SamoBoja;
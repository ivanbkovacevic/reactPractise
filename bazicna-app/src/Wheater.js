import React from 'react';
import './App.css';

const MapElemenat = (props) => {
    return (
        <div>   
                <p>GRAD -{props.grad}</p>
                <p>DRZAVA -{props.drzava}</p>
                <p>TEMPERATURA -{props.temperatura}</p>
                <p>PRITISAK -{props.pritisak}</p>
                <p className="crvena">BRZINA VETRA -{props.vetar}</p>
                <p ><img className={ props.ikonica ? "klasa" : null }  src={props.ikonica}/></p>
                <p className="klasa">SVI PODACI -</p>
            
        </div>
    );
};

export default MapElemenat;
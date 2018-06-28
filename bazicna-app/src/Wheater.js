import React from 'react';

const MapElemenat = (props) => {
    return (
        <div>   
                <p>GRAD -{props.grad}</p>
                <p>DRZAVA -{props.drzava}</p>
                <p>TEMPERATURA -{props.temperatura}</p>
                <p>PRITISAK -{props.pritisak}</p>
                <p>BRZINA VETRA -{props.vetar}</p>
                <p><img alt='slika' src={props.ikonica}/></p>
                <p>SVI PODACI -</p>
            
        </div>
    );
};

export default MapElemenat;
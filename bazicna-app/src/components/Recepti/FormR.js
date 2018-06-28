import React from 'react';

const FormR = (props) => {
    return (
        <div>
            <form onSubmit={props.getR} style={{marginBottom:'2rem'}}>
                <input type="text" name="receipeName"/>
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    );
};

export default FormR;
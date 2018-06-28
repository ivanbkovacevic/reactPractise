import React from 'react';

const FormR = (props) => {
    return (
        <div>
            <form onSubmit={props.getR}>
                <input type="text" name="receipeName"/>
                <button>Search</button>
            </form>
        </div>
    );
};

export default FormR;
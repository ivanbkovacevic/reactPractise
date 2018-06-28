import React from 'react';

const Form = (props) => {
    return (
        <div>
              <form onSubmit={props.submitHandler}>
                 <input  type="text" name='grad'  placeholder="grad"/>
                 <input  type="text" name='drzava'  placeholder="drzava"/>
                 <button type="submit">Potvrdi</button>
              </form>
              
            
        </div>
    );
};

export default Form;
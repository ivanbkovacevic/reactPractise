import React from 'react';
import Auks from '../../../higheroc/auks';

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey=>{
        return (
        <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
        </li>);
    }); 
  
    return (
        <Auks>
            <h3>Your order</h3>
            <p>A delicius burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to CheckOut</p>
        </Auks>
    );
};

export default OrderSummary;
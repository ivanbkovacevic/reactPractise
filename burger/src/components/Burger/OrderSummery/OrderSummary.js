import React, {Component} from 'react';
import Auks from '../../../higheroc/Auks/auks';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
componentWillUpdate(){
    console.log('[OrderSummary] will update');
}

    render (){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey=>{
            return (
            <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        }); 
        return (  
        <Auks>
            <h3>Your order</h3>
            <p>A delicius burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut</p>
            <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Auks>);
    }
  
    
};

export default OrderSummary;
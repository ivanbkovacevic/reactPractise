import React, { Component } from 'react';
import Auks from '../../higheroc/Auks/auks';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummery/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../higheroc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

state={
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
}

componentDidMount(){
    console.log('nesto burger');
    axios.get('https://react-my-burger-197af.firebaseio.com/ingredients.json')
    .then(response => {
        console.log('nesto axios');
        this.setState({ingredients:response.data});
    })
    .catch(error=>{
        console.log('nesto burger catch');
        this.setState({error:true});
    });
}

updatePurchaseState =(ingredients)=>{
   
    const sum = Object.keys(ingredients)
    .map(igKey=>{
        return ingredients[igKey]
    })
    .reduce((sum,el)=>{
        return sum + el;
    },0);
    this.setState({purchasable: sum > 0 });
}

addIngredientHandler =(type)=>{
  const oldCount = this.state.ingredients[type];
  const updatedCount= oldCount + 1;
  const updatedIngredients = {
      ...this.state.ingredients
  };
  updatedIngredients[type] = updatedCount;
  const priceAddition= INGREDIENT_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice+priceAddition;
  this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
  this.updatePurchaseState(updatedIngredients);
}

removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type];
    if(oldCount <=0){
        return;
    }
    const updatedCount= oldCount - 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction= INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice-priceDeduction;
    this.setState({totalPrice:newPrice, ingredients: updatedIngredients});
    this.updatePurchaseState(updatedIngredients);

}

purchaseHandler = ()=>{
    this.setState({purchasing: true});
}

purchaseCancelHandler=()=>{
    this.setState({purchasing: false});
}

purchaseContinueHandler = ()=>{

// 
const queryParams= [];
for(let i in this.state.ingredients ){
    queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
}
queryParams.push('price='+ this.state.totalPrice);
const queryString = queryParams.join('&');
this.props.history.push({
    pathname: '/checkout',
    search:'?' + queryString
});
}

    render() {
        const disabledInfo= {
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0
        }
        let orderSummary = null;      
        console.log(this.state.ingredients);
        let burger = this.state.error ? <p>Ingredients not loaded</p> : <Spinner /> ;
        if(this.state.ingredients){
            burger = (
                <Auks>
                    <Burger ingredients={this.state.ingredients}/> 
                     <BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice} 
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}/>       
                  </Auks> 
                    );
                    orderSummary =  <OrderSummary 
                    price={this.state.totalPrice}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    ingredients={this.state.ingredients} />
        }
        if(this.state.loading){
            orderSummary = <Spinner />;
        }
       

        return (
            <Auks>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                   {orderSummary}
                </Modal>
                {burger}
            </Auks>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
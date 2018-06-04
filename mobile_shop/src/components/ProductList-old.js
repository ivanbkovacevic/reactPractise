import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';



class CategoriesList extends Component {
  state={
      products:[],
   
  }
  
    render() {
        console.log(this.props.products);
        const Item = this.props.products.map(prod=>{
        return (
            <ProductItem key={prod.id} title={prod.title} weight={prod.weight} />          
            )});
        return (
            <div>     
               <ul>{Item}</ul>
            </div>            
        );
    }
}

export default CategoriesList;



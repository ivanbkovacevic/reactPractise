import React, { Component } from 'react';
import ProductItem from '../components/ProductItem';

class ProductList extends Component {
    render() {
        if(this.props.products.length > 0){
            const Item = this.props.products.map(prod=>{
                return ( 
                <ProductItem key={prod.id} title={prod.title} weight={prod.weight} /> 
            )
            })
            return (
                <div>
                    {Item}
                </div>
            );
        }else{
            return <h3>Izaberite kategoriju</h3>
        }
        
    }
}

export default ProductList;
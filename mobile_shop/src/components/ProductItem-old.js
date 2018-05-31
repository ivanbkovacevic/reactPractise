import React, { Component } from 'react';

class ProductItem extends Component {
 
     

     
    render() {
      
        return (
            
            <li>{this.props.title} - {this.props.weight}</li>
        );
    }
}

export default ProductItem;
import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
                <li><strong>{this.props.title}</strong> - {this.props.weight}  
                <img className="img-thumbnail" src={this.props.img} alt="slika"/></li>
            </div>
        );
    }
}

export default ProductItem;
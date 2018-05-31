import React, { Component } from 'react';

class ProductItem extends Component {
    render() {
        return (
            <div>
                <li>{this.props.title} - {this.props.weight}</li>
            </div>
        );
    }
}

export default ProductItem;
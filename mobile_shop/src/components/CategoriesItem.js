import React, { Component } from 'react';

class CategoriesItem extends Component {

    render() {
        return (       
            <li onClick={()=>this.props.fromChildToParentCallback(this.props.id)}>
            {this.props.title} - {this.props.prodlength}</li>
        );
    }
}

export default CategoriesItem;
import React, { Component } from 'react';
import CategoriesItem from '../components/CategoriesItem';

class CategoriesList extends Component {
    state={
        categori:this.props.categories,
        id:''
    }

    receiveChildValue=(id)=>{  
           
        this.props.odRoditelja(id);
    }

    render() {
       

        const Item = this.props.categories.map(cat=>{
        //   console.log(this.state.id);
        return (
            <CategoriesItem 
                key={cat.category_id} 
                id={cat.category_id}
                title={cat.category_title} 
                img={cat.category_product[0].img}
                prodlength={cat.category_product.length}
                fromChildToParentCallback={this.receiveChildValue}
                
                />
            )});

        return (
            <div>
               <ul>{Item}</ul>
<<<<<<< HEAD

=======
>>>>>>> 4dc92c3c1ea456bd83c637c72015d04ea577c86d
            </div>
              
        );
    
    }
}

export default CategoriesList;
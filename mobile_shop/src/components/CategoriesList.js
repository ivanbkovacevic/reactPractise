import React, { Component } from 'react';
import CategoriesItem from '../components/CategoriesItem';

class CategoriesList extends Component {
    state={
       
        id:''
    }

    receiveChildValue=(id)=>{  
           
        this.props.odRoditelja(id);
    }

    render() {
        console.log(this.props.categories);
        // const data = Array.from(this.props.categories);
        // console.log(data);
        
        // const Item = data.map(cat=>{
      
        // return (
        //     <CategoriesItem 
              
        //         // id={cat.category_id}
        //         title={cat.categoryName} 
              
        //         // prodlength={cat.category_product.length}
        //         // fromChildToParentCallback={this.receiveChildValue}          
        //         />
        //     )
        // });

        return (
            <div>
               {/* <ul>{Item}</ul> */}
              
            </div>
              
        );
    
    }
}

export default CategoriesList;
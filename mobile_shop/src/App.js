import React, { Component } from 'react';
import CategoriesList from './components/CategoriesList';
import axios from 'axios';
import ProductList from './components/ProductList';
import AddCategori from './components/AddCategori';
import {  Route, Link } from 'react-router-dom';
import AddProduct from './components/AddProduct';

class App extends Component {
  state={
    categories: {},
    
    selectedCategoryProducts:[],
    
}

componentDidMount(){
    axios.get('https://mobile-shop-ee9e0.firebaseio.com/categories.json')
    .then(response => {  
      console.log(response.data);
      for(var prop in response.data){
      
        console.log('category uuid ' ,prop);
        console.log('category title ',response.data[prop].categoryName);
        console.log('https://mobile-shop-ee9e0.firebaseio.com/categories/' + prop + '.json');

      }
        this.setState({categories:response.data});  
        console.log(this.state.categories)
    })
    .catch(error=>{
        console.log('nesto mobile catch');
        this.setState({error:true});
    });
}

primljenoOdCatList = (id) =>{
  for( var prop in this.state.categories){
    if(id === this.state.categories[prop].category_id){
      let item = this.state.categories[prop].category_product;
      console.log(item);
      this.setState({selectedCategoryProducts:item});
    }
  }
}

  render() {     
  return (
      <div className='container-fixed'>
            
                <div className='container-fixed'>
                    <div className="row">    
                            <div className="col-sm-6">
                            <h1>Mobile Shop kategorije telefona:</h1>
                          
                                <CategoriesList 
                                categories={this.state.categories}
                              
                                  // odRoditelja={this.primljenoOdCatList}
                                    />      
                                   <AddCategori /> 
                            </div>
                            <div className="col-sm-6">
                                {/* <ProductList products={this.state.selectedCategoryProducts} />      */}
                                 {/* <AddProduct />  */}
                                <Link to="/categoryName">PRODUCT</Link>
                                <Route path={"/categoryName"} exact component={AddProduct}/>  
                            </div>
                    </div>
            </div>
            
      </div>
    );
 
   

}
}

export default App;

import React, { Component } from 'react';
import CategoriesList from './components/CategoriesList';
import axios from 'axios';
import ProductList from './components/ProductList';

class App extends Component {
  state={
    categories: [],
    selectedCategoryProducts:[]
}
componentDidMount(){
    axios.get('https://mobile-shop-ee9e0.firebaseio.com/.json')
    .then(response => {  
        this.setState({categories:response.data});  
        console.log(this.state.categories[0].category_product)
    })
    .catch(error=>{
        console.log('nesto mobile catch');
        this.setState({error:true});
    });
}

primljenoOdCatList = (id)=>{
  
  for( var prop in this.state.categories){
  
    if(id === this.state.categories[prop].category_id){
     
      let item = this.state.categories[prop].category_product;
      console.log(item);
      this.setState({selectedCategoryProducts:item});
    }
  }

}

  render() {
 
if(this.state.categories !== undefined )
{ 
  if(this.state.categories.length > 0){

  return (
      <div className="App">
          <h1>Mobile Shop kategorije telefona:</h1>
          <CategoriesList 
             categories={this.state.categories}
             odRoditelja={this.primljenoOdCatList}
              />    
          <ProductList products={this.state.selectedCategoryProducts} />
      </div>
    );
  }else{
    return <h1>Ucitavanje</h1>}
}
}
}

export default App;

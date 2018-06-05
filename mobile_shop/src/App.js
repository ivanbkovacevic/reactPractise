import React, { Component } from 'react';
import CategoriesList from './components/CategoriesList';
import axios from 'axios';
import ProductList from './components/ProductList';

class App extends Component {
  state={
    categories: [],
    selectedCategoryProducts:[],
    
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
 
if(this.state.categories !== undefined )
{ 
  if(this.state.categories.length > 0){

  return (
<<<<<<< HEAD
      <div className="App">
          <h1>Mobile Shop kategorije telefona:</h1>
          <CategoriesList 
             categories={this.state.categories}
             odRoditelja={this.primljenoOdCatList}
              />    
          <ProductList products={this.state.selectedCategoryProducts} />

=======
      <div className='container-fixed'>
      <div className="row aligne-center" ><h1>Mobile Shop kategorije telefona:</h1>
       </div>
         <div className="row">
       
            <div className="col-sm-6">
                  <CategoriesList 
                  categories={this.state.categories}
                  odRoditelja={this.primljenoOdCatList}
                    />    
            </div>
            <div className="col-sm-6">
                <ProductList products={this.state.selectedCategoryProducts} />
             
             </div>
         </div>
>>>>>>> 4dc92c3c1ea456bd83c637c72015d04ea577c86d
      </div>
    );
  }else{
    return <h1>Ucitavanje</h1>}
}
}
}

export default App;

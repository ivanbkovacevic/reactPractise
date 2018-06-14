import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
    constructor (props) {
        super(props);
        this.state = {
            categories: {},
               categoryID:'',
               model: '',
               weigth: ''
                    
        }
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


    handleSubmit=(event)=> {
        event.preventDefault();
        alert("radi2");
        const product = {      
                 model: this.state.model,
                 weigth:this.state.weigth  }
       
     
                 axios.post('https://mobile-shop-ee9e0.firebaseio.com/categories/-LEym95czu31JozhThSm/product.json',product)
                 .then(res=>console.log(res))
                 .catch(error=>console.log(error));
      }
      
      
    
      handleUserInput =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      
      }

    

    render() {
        const data = this.state.categories;
        console.log(data);
       for( var prop in data){
    
       
        return (
            <div>
                <p>{prop.categoryName}</p>
                <form onSubmit={this.handleSubmit}>
                <select name="categories">
                    <option value="">1 categorija</option>
                    <option value="">2 categorija</option>
                    <option value="">3 categorija</option>
                    <option value="">4 categorija</option>
                </select>
                <input type="text" placeholder="naziv modela" name="model" value={this.state.model}  
                        onChange={(e) => this.handleUserInput(e)}/>
                <input type="text" placeholder="tezina modela" name="weigth" value={this.state.weigth}  
                        onChange={(e) => this.handleUserInput(e)}/>
                <button type="submit" >Submit</button>
                </form>
              
            </div>
        );}
    }
}

export default AddProduct;
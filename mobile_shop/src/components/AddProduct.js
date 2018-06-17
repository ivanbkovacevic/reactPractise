import React, { Component } from 'react';
import axios from 'axios';

class AddProduct extends Component {
    constructor (props) {
        super(props);
        this.pekara=["sendvic","pljeskavica","pizza","burek"];
            this.categories=this.props.categories;
              this.categoryID=this.props.categoriesID;
              this.celaBaza=this.props.celaBaza;
             
        console.log(this.categories,this.categoryID, this.celaBaza);

        this.state={
            model:'',
            weigth:'',
            redId:''
        }
       
      }
    
    handleSubmit=(event)=> {
        event.preventDefault();
        alert("radi2");
        
        const product = {      
                 model: this.state.model,
                 weigth:this.state.weigth,
                  }

                 axios.post('https://mobile-shop-ee9e0.firebaseio.com/categories/'+this.state.redId+'/product.json',product)
                 .then(res=>console.log(res))
                 .catch(error=>console.log(error));
      }
      
    
      handleUserInput =(e)=> {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
      
      }
       vrati = (k,o,p)=>{
           let w='nesto';
           w=k.map(q=>{
               return <option>{q}</option>
           })
           return <select>
                    <option>{k}</option>
                    <option>{o}</option>
                    <option>{p}</option>
                   {w}
                 </select>
       }
     
    render() {
        let celaBaza= this.props.celaBaza;
        console.log(typeof(celaBaza));
        // let celaBazaS=(typeof(celaBaza)=='object')?
        // celaBaza.map((prviRed,i)=>{
        //     return (  <option value={i}>{prviRed.categoryName} </option>);
        // })
        // :null
        let red=[];
       
       for(let i in celaBaza){
           red.push(<option value={i}>{celaBaza[i].categoryName}</option>)   ; 
         
       }
     
        return (
            <div>            
                <form onSubmit={this.handleSubmit}>
                <select name="redId" onChange={(e) => this.handleUserInput(e)}>
                  {red}           
                </select>
                <input type="text" placeholder="naziv modela" name="model" value={this.state.model}  
                        onChange={(e) => this.handleUserInput(e)}/>
                <input type="text" placeholder="tezina modela" name="weigth" value={this.state.weigth}  
                        onChange={(e) => this.handleUserInput(e)}/>
                <button type="submit" >Submit</button>
                </form>
                <button onClick={()=>this.handleSubmit()}>Upisi</button> 
          
          {this.vrati(this.pekara,"kifla", "djevrek")}
            </div>
        )
    }
}

export default AddProduct;
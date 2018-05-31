import React, { Component } from 'react';
import axios from 'axios';
import V from './Blog/v';
import I from './i';

import {Redirect} from 'react-router-dom';

class Vezba extends Component {
    state = {
        categories:[],
        nekoSranje: null
    }

    componentDidMount(){
      //  console.log(this.props);

        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            //console.log(res);
            this.setState({categories:res.data});
        }) .catch(error=>{
            console.log(error);
           // this.setState({error:true});
        });

       
            
    }

    uradiceNesto=()=>{
        console.log("jebeno nesto");
    }

    ispisiInput=(event)=>{
        console.log(event.target.value);
        this.setState({nekoSranje:event.target.value});
    }
  
    render () {
        const  kita=this.props.kita;

        let listaNeka=null;
        listaNeka = this.state.categories.map(cat=>
        <li key={cat.id}>{cat.name} </li>);

        let lista1=null;
         lista1 = this.state.categories.map(x=>
         <li>{x.address.street}+{x.address.city}</li>);

           let lista2=null;
           lista2 = this.state.categories.map(x=>
           <li>{x.address.geo.lat}</li>);
  

        return (
            <div >
             <ol>
             <V  lis={listaNeka}
             uradinesto={this.uradiceNesto}
              />
              {kita}
             
             </ol>
             {listaNeka}
             {kita}
             <I
             ispisiinput={this.ispisiInput}
             nekosranje={this.state.nekoSranje} />
          {lista1}
          {lista2}
             <p>nesto</p>
            </div>
        );
    }
}

export default Vezba;
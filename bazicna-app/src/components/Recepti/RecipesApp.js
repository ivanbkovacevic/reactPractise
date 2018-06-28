import React, { Component } from 'react';
import FormR from '../Recepti/FormR';
import Recipes from '../Recepti/Recipes';

class RecepiesApp extends Component {
    state={
        recipes:[]
    }

    getReceipe = async (e) =>{
        const API_KEY= '639d93d72c1a79ababa1c7735d5933de';
        const receipeName= e.target.elements.receipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${receipeName}&count=5`);
    
    const data = await api_call.json();
   this.setState({recipes:data.recipes});
   console.log(this.state.recipes)
   }   

   componentDidUpdate=()=>{
       const recipes = JSON.stringify(this.state.recipes);
       localStorage.setItem("recipes",recipes)
   }

   componentDidMount=()=>{
       const json= localStorage.getItem("recipes");
       const recipes = JSON.parse(json);
       this.setState({recipes:recipes});
   }

    render() {
        return (
            <div>
                 <FormR getR={this.getReceipe} />
                 <Recipes recipes={this.state.recipes}/>
            </div>
        );
    }
}

export default RecepiesApp;
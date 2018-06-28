import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recipe extends Component {
    state={
        activeRecipe:[]
    }

    componentDidMount= async()=>{
        const title = this.props.location.state.recipe;
        const API_KEY= '639d93d72c1a79ababa1c7735d5933de';

     const req = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    
    const res = await req.json();
    this.setState({activeRecipe:res.recipes[0]});
   console.log(res.recipes[0])
    }
    render() {
       const recipe = this.state.activeRecipe;
        return (
            <div className='container'>
               { this.state.activeRecipe.length !==0 &&
                 <div>
                 <img src={recipe.image_url} alt={recipe.title}/>
                 <h3>{recipe.title}</h3>
                 <h4>Publisher:<span>{recipe.publisher}</span></h4>
                 <h5>website:<span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span></h5>
             
             <button>
                 <Link to="/">Go Home</Link>
             </button>
             </div>
            }
            </div>
        );
    }
}

export default Recipe;
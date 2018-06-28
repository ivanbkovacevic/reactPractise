import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = (props) => {
    return (
        <div className='container'>
            <div className="row">
            {props.recipes.map(r=>{
                     return (
                        <div key={r.recipe_id} className="col-md-4" style={{marginBottom:'2rem'}}>
                             <div >
                              <img src={r.image_url} alt={r.recipes_title}/>
                              <h5 >{ r.title.length <20 ? `${r.title}` : `${r.title.substring(0,25)}...` }
                              </h5>
                              <p>Publisher:<span>{r.publisher}</span></p> 
                             </div>
                             <button className="btn btn-default"
                             ><Link to={{
                                  pathname: `/recipe/${r.recipe_id}`,
                                 state: { recipe:r.title} }}>View Recipe</Link></button>
                        </div>
                     )
                 })}
            </div>
           
        </div>
    );
};

export default Recipes;
import '../../src/App.css';
import React, { Component } from 'react';
import FormR from '../components/FormR';

class Wheater1 extends Component {
 state={
     class:'c',
     a:true,
     recipes:[]
 }
    proba=()=>{
        console.log('prova w');
        console.log(this.state.a)
       this.setState({class: this.state.class == 'c' ? '' : 'c',
       a:!this.state.a})
    }

    getName=()=>{
      return Promise.resolve('pizza');
    }

    getAge=()=>{
        let pekara =null;
        let imaBureka=false;
        if(imaBureka){
            pekara='Bistro';
        }else{
            pekara='Aleko'
        }
        return Promise.resolve('Jescemo u ' + pekara);
      }

      async main(){
       try{
        const name = await this.getName();
        const age = await this.getAge();
        console.log(name);
        console.log(age);
       } catch(err) {
           console.log(err)
       }
        }

        promiseVezba = new Promise((resolve,reject)=>{
            let varijabla = 'Bubaa';
            if(varijabla === 'Buba'){
                resolve(' piletinu')
            }else{
                reject(' jagnjetinu')
            }
        })
// -----------------------------------------------------------------

    getReceipe = async (e) =>{
        const API_KEY= '639d93d72c1a79ababa1c7735d5933de';
        const receipeName= e.target.elements.receipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${receipeName}&count=10`);
    
    const data = await api_call.json();
   this.setState({recipes:data.recipes});
   console.log(this.state.recipes)
   }   

//  -----------------------------------------------------------------
    render() {
        this.main();
        Promise.all([this.getName(),this.getAge]).then(()=>{
            console.log('pizza burek')})

        this.promiseVezba.then((fromResolve)=>{
            console.log('jescemo' + fromResolve );
        }).catch((fromReject)=>{
            console.log('jescemo' + fromReject)
        });


        return (
            <div>
                 <p onClick={this.proba} className={this.state.class} >{this.props.w1}</p>
                 <header>RECEIPES</header>
                 <FormR getR={this.getReceipe} />
                 {this.state.recipes.map(r=>{
                     return (
                         <div key={r.recipe_id}>
                           <img src={r.image_url} alt={r.recipes_title}/>
                            <p >{ r.title }</p>
                         </div>
                     )
                 })}
            </div>
        );
    }
}

export default Wheater1;
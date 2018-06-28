import '../WheaterApp/App.css';
import React, { Component } from 'react';
import FormR from '../components/Recepti/FormR';
import Recepies from '../components/Recepti/Recipes';

class Wheater1 extends Component {
 state={
     class:'c',
     a:true,
     
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
// -----------------------recepis------------------------------------------

//  -----------------------recepies------------------------------------------
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
               
            </div>
        );
    }
}

export default Wheater1;
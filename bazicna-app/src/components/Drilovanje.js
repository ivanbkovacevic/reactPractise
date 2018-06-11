import React, { Component } from 'react';

class Drilovanje extends Component {
  constructor(props){
    super(props);

  //   var doubledArray = array.map(function (nested) {
  //     return nested.map(function (element) {
  //         return element * 2;
  //     });
  // });

  // var doubledArray = array.map(nested => nested.map(element => element * 2));

    // this.nesto= "nesto";
    // this.hobiis= this.props.family.map(function(nested){
    //   return nested.map(function(elemenat){
    //     return elemenat.naziv;
    //   });
    // });
// this.element="";

this.metoda=(m)=>{
  
    this.elem= document.createElement('div');
  this.elem.style.cssText="width:200px;height:200px;background:green;border: 2px solid yellow";
  var element= document.body.appendChild(this.elem);
return element;
}


     this.hobii = this.props.family.map(item=>{
      if(item.hasOwnProperty("hobi")){
         return (
           item.hobi.map(ho=>
            <li>{ho.naziv}</li>)
                )
        }
    });
  
  }
 
        render() {
          
          return (
            <div>
               <ul>{this.hobii} </ul> 
               <p onClick={()=>this.metoda(" PROBA")}>Klikni</p>
               <div>{this.elem}-pera-</div>
            </div>
          );    
        }
      }
       
    
export default Drilovanje;

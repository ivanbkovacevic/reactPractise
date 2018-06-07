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





     this.hobii = this.props.family.map(item=>{
      if(item.hobi){
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
            </div>
          );    
        }
      }
       
    
export default Drilovanje;

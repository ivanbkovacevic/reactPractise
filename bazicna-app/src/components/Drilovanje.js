import React, { Component } from 'react';

class Drilovanje extends Component {
  constructor(props){
    super(props);

    this.nesto= "nesto";
    this.ljudi = this.props.family;
    this.imena = this.ljudi.map((item,index)=>{ 
        return (
            <li key={index}>{item.ime}</li>
        );
   
    });
  }
  
        render() {
          return (
            <div>
                {this.imena} 
            </div>
          );    
        }
      }
    

export default Drilovanje;

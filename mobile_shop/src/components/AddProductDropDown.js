import React, { Component } from 'react';

class AddProductDropDown extends Component {
    constructor(props){
        super(props);
        this.baza = [this.props.baza];
       
       
    }
   
    render() {
      let katIme = this.props.baza.map(i=>{
            return (
                <option value={i}>{i}</option> 
                 )
                })
        
        return (
            
            <div>
                <ul>{katIme}</ul>
               <select name="veyba">
                    {katIme}              
                </select>
            </div>
        );
    }
}

export default AddProductDropDown;
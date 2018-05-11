
import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {


    shouldComponentUpdate(nextProps, nextState){
       return true;
        console.log('[update persons.js]')
    }

    render (){
        return  this.props.persons.map((person,index)=>{
            return  <Person 
                click={()=>this.props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event)=>this.props.changed(event, person.id)} />
        });
    }
}

    export default Persons;
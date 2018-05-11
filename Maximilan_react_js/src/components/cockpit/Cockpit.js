import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../HOC/Aux';

const Cockpit = (props) =>{     
    let assignedClasses= [];
    let btnClass= ' ';

    if(props.showPersons){
        btnClass=classes.Red;
    }
    if (props.persons.length <=2){
    assignedClasses.push(classes.red); //classes =['red']
    }
    if(props.persons.length <=1){
    assignedClasses.push(classes.bold); //classes=['bold]
    }
   return (
            <Aux>
            <h1>Hi, im React app</h1>
            <p className={assignedClasses.join(' ')}>This is realy working</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle name</button> 
           </Aux>
   );
};

export default Cockpit;
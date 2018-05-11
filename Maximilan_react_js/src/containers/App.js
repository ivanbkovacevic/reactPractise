import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import WithClass from '../HOC/WithClass';

class App extends Component {

shouldComponentUpdate(nextProps, nextState){
  return true;
  console.log('[update App.js]');

}
  ///////////////////////////////// state ///////////////////////////////////////////
  state={
    persons:[
      {id: 1, name: "MAx", age:30},
      {id: 2, name: "MAnu", age:35},
      {id: 3, name: "Stefani", age:33},
    ],
    showPersons: false
  }
//////////////////////////////////// state ///////////////////////////////////////////
////////////////////////////////////brisanje iz Array/////////////////////////////////////////////////////
    deletePersonHandler = (personIndex) =>{
      //  const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // ovako se pravi novi/duplikat array
        persons.splice(personIndex,1);   //splice() izbacuje elemenat
        this.setState({persons:persons})
    }
////////////////////////////////////brisanje iz Array/////////////////////////////////////////////////////
////////////////////////////////////menjanje elemenata u Array/////////////////////////////////////////////////////
    nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id ===id;
    });
      const person = {...this.state.persons[personIndex]};
      person.name = event.target.value;
      const persons= [...this.state.persons];
      persons[personIndex]=person;
      this.setState({persons:persons})
    }
////////////////////////////////////menjanje elemenata u Array/////////////////////////////////////////////////////
togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons : !doesShow
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
////////////////////////////////////////// ispisivanje html kroz varijablu //////////////////////////////
    let persons = null;
    if (this.state.showPersons){
        persons =   <Persons 
           persons={this.state.persons}
           clicked={this.deletePersonHandler}
           changed={this.nameChangedHandler}
          /> ;
    }
////////////////////////////////////////// ispisivanje html kroz varijablu //////////////////////////////
return (
      <WithClass classes={classes.App}>
        <button onClick={()=>{this.setState({showPersons:true})}}>Show persons</button>
          <Cockpit 
            showPersons={this.state.showPersons} 
            persons={this.state.persons} 
            clicked={this.togglePersonHandler} />
          {persons}  
          </WithClass>
    );
  }
}

export default App;

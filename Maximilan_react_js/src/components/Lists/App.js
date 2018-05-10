import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
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
    const style = {
      backgrounColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    };
////////////////////////////////////////// ispisivanje html kroz varijablu //////////////////////////////
    let persons = null;
    if (this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person,index)=>{
              return <Person 
                  click={()=>this.deletePersonHandler(index)}
                  name={person.name} 
                  age={person.age}
                  key={person.id} 
                  changed={(event)=>this.nameChangedHandler(event, person.id)} />                
            })}          
          </div>
        );
    }
////////////////////////////////////////// ispisivanje html kroz varijablu //////////////////////////////

/////////////////////////////////////////////////////////////////////////
    return (
      <div className="App">
        <h1>Hi, im React app</h1>
        <button style={style} onClick={this.togglePersonHandler}>Toggle name</button>       
         {persons}  
      </div>
    );
  }
}

export default App;

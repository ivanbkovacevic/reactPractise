import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name: "MAx", age:30},
      {name: "MAnu", age:35},
      {name: "Stefani", age:33}
    ]
  }

  switchNameHandler = (newName) =>{
    this.setState({persons:[
      {name: newName, age:30},
      {name: "MAnu", age:35},
      {name: "Stefani", age:3}
    ]

    })
  }

nameChangedHandler = (event) => {
  this.setState({persons:[
    {name: 'MAx', age:30},
    {name: event.target.value, age:35},
    {name: "Stefani", age:3}
  ]

  })
}

  render() {

    const style = {
      backgrounColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, im React app</h1>

        <button style={style} onClick={()=>this.switchNameHandler('maximmilian')}>Switch name</button>

        <Person 
        name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person  
        changed={this.nameChangedHandler}
        click={this.switchNameHandler.bind(this,'MAximiiiiiiiilian')}
        name={this.state.persons[1].name} age={this.state.persons[1].age} >Hobie: racing</Person>
        <Person  
        name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;

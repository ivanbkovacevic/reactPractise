import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent';


class App extends Component {
state={
  text: 3
}

  textLengthHandler = (event)=>{
    const textleng= parseInt(event.target.value.length);
     console.log(textleng);
     this.setState({
       text:textleng
     })
   }


  render() {

    return (
      <div>
        <input type="text" onChange={(event)=>this.textLengthHandler(event)}/>
        <p>{this.state.text}</p>
        <ValidationComponent tl={this.state.text} />
      </div>
    );
  }
}

export default App;

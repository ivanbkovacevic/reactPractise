import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation';
import Char from './Char';


class App extends Component {
state={
  userInput: ''
}

  inputChangeHandler = (event)=>{
     this.setState({userInput:event.target.value})
   }

   
  deleteCharHandler = (index) =>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updateText = text.join('');
    this.setState({userInput:updateText});
  }
    
  render() {
    const CharList = this.state.userInput.split('').map((ch,index)=>{
      return <Char 
      character={ch}
       key={index} 
       clicked={()=> this.deleteCharHandler(index)} />;
    });
  
    return (
      <div>
        <input type="text" 
        onChange={this.inputChangeHandler} 
        value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {CharList}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import PersonList from './components/PersonList';
import PersonInput from './components/PersonInput';
import PersonDelete from './components/PersonDelete';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
     
    }
  }




  render() {
    return (
      <div className="App container">
         <h1>nesto</h1>
         <PersonInput />
         <PersonList />
         <PersonDelete />
      </div>
    );
  }
}

export default App;

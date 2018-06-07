import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Colors from './components/Colors';
import JednaBoja from './components/JednaBoja';
import Drilovanje from './components/Drilovanje';

class App extends Component {
  state={
    id:1,
    bojaSlova: "white"
  }

  AppKliknuto=(idd)=>{
    console.log("app "+idd);
    this.setState({id:idd});
    console.log(this.state.id);
  };
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Bazicni template za REACT JS
        </p>
        <Colors colors={colors} 
        appFun={this.AppKliknuto}/>
        <JednaBoja ime={colors[this.state.id].name}
          color={colors[this.state.id].color}
          idBoje={this.state.id}
        />
        <Drilovanje family={family}/>
      </div>
    );
  }
}
let colors = [{id:0, name:"crveno", color:"red"},
{id:1, name:"plavo", color:"blue"},
{id:2, name:"zeleno", color:"green"},
{id:3, name:"narandzasto", color:"orange"}];

let family = [{ime:'a',preyime:"popov",hobi:[{naziv:"kajak"},{naziv:"trcanje"},{naziv:"pesacenje"}]},
{ime:'b',preyime:"delic"},{ime:'c',preyime:"kocic"}];
export default App;

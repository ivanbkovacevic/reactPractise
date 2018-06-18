import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);

     this.state={
      data:'',
      temperature: undefined,
      city:undefined
  }

  this.ispisi=()=>{
    console.log(this.state.data.current.cloud);
    console.log(this.state.data)
  } 
  }


  componentDidMount(){
    axios.get('http://api.apixu.com/v1/current.json?key=de085ee069884d00975131514181806&q=Paris')
      .then(response=>{
        console.log(response.data.current.cloud);
        this.setState({data:response.data});
       
      }).catch(error=>{
        console.log('nesto weather error catch');
        this.setState({error:true});
      });
     
  }
 

//  provrti=()=>{
//   for(var i in this.state.data.current){
//     <li>{this.state.data.current[i]}</li>;
//     }
//  }


  render() {
    const data = this.state.data;
    // this.setState({temperature:data.current.cloud});
   let vreme = [];
      for(let i in this.state.data){
          for(let k in this.state.data[i]){
            vreme.push(<li>{k} :{this.state.data[i].name}</li>);   
          }  
         
      }

      let vremeLista = vreme.map((con,i)=>{
        return(<li key={i}>{con}</li>)
      });
 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bazicna App</h1>
        </header>
        <p className="App-intro">
          Bazicni template za REACT JS
        </p>
        <ul>
       {vreme } 
       {vremeLista}
        </ul>
        {/* <h1>{this.state.temperature}</h1> */}
       <button onClick={()=>this.ispisi()}>stisni</button> 
      </div>
    );
  }
}


export default App;

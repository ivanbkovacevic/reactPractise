import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './Style.css';
import Form from './Form';
import Wheater from './Wheater';

class App extends Component {
  constructor(props){
    super(props);
  
     this.state={
      data:'',  
      temperatura:null,
      drzava:undefined,
      brzinaVetra:'',
     grad:undefined,
     gradUpit:'',
     pritisak:''
     
  }
 
  this.submitHandler=(e)=>{
    e.preventDefault();
    const grad=e.target.grad.value;
    const drzava =e.target.drzava.value;
    this.setState({grad:grad,
                 drzava:drzava});
    }

    this.posaljiZahtev=()=>{
      if(this.state.grad){
    axios.get('http://api.apixu.com/v1/current.json?key=de085ee069884d00975131514181806&q='+this.state.grad)
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data});
     
    }).catch(error=>{
      console.log('nesto weather error catch');
      this.setState({error:true});
    });
}
  }


  // componentDidMount(){
  //   axios.get('http://api.apixu.com/v1/current.json?key=de085ee069884d00975131514181806&q='+this.state.gradUpit)
  //     .then(response=>{
  //       console.log(response.data);
  //       this.setState({data:response.data});
       
  //     }).catch(error=>{
  //       console.log('nesto weather error catch');
  //       this.setState({error:true});
  //     });
      
  // }



 }
inputHandler=(e)=>{
  console.log(e.target.value);
  const grad = e.target.value;
  const drzava = e.target.value;
  this.setState({gradUpit:grad,
                drzava:drzava});
}

  upisiPodatke=()=>{
    if(this.state.grad){
    const grad=this.state.data.location.name;
    const temperatura = this.state.data.current.temp_c;
    const drzava = this.state.data.location.country;
    const brzinaVetra=this.state.data.current.wind_kph;
    const pritisak = this.state.data.current.pressure_mb
     this.setState({grad:grad
      ,temperatura:temperatura,
      drzava:drzava,
      brzinaVetra:brzinaVetra,
      pritisak:pritisak
    });
  }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bazicna App</h1>
        </header>
        <p className="App-intro">
          Bazicni template za REACT JS      
        </p>
        <div>
            <Form
                  submitHandler={this.submitHandler}
              />
        </div>
        <Wheater 
            grad={this.state.grad}
            drzava={this.state.drzava}
            temperatura={this.state.temperatura}
            vetar={this.state.brzinaVetra}
            pritisak={this.state.pritisak} />
        <div >
             <button onClick={()=>this.upisiPodatke()}>Prikazi rezultate</button>
             <button onClick={()=>this.posaljiZahtev()}>Posalji zahtev</button>
             
        </div>
      
      </div>
    );
  }
}


export default App;

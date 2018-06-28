import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import './Style.css';
import Form from './Form';
import Wheater from './Wheater';
import Wheater1 from './components/Wheater1';

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
     pritisak:'',
     celaLista:[],
     ikonica:''
     
  }
 var zoo={}
  var animal = {};
  var animalMap={sound:'zvuk',age:'godiste',place:'mesto',food:'hrana',hobi:'pec'};
  // Add keys to the hashmap
  animal = { sound: 'meow', age:18, place:'pancova',hobi:'fishing',boja:'siva',food:'pomfrit' };
  var animalSR={};
  
  for(var x in animal){
    console.log('animal x - '+x+' - '+animal[x])
    for(var xx in animalMap){
       if(x ==xx){
         var key=animalMap[x]
         animalSR[key]=animal[x]
       }
    }
  }

  console.log(animalSR);

//   var zivotinja = {};
//   // Add keys to the hashmap
//   zivotinja = { zvuk: 'mijau', godiste:8 , mesto:'pa'};


//   for(var i in animal){
//      console.log(i+"/ "+animal[i])
     
//      for(var j in zivotinja){
//           console.log(j+" //"+zivotinja[j])
//           if(i!==j){
//             zoo[j]=animal[i];
//             console.log('zoo'+zoo[j]);
//           }
//      }
//   }
// console.log(zoo)

  this.submitHandler=(e)=>{
    e.preventDefault();
    const grad=e.target.grad.value;
    const drzava =e.target.drzava.value;
    this.setState({
      grad:grad,
      drzava:drzava});
    }

    this.current = {};
    this.currentSR = {};
    this.currentMap ={cloud:'oblaci',feelslike_c:'licni osecaj',humidity:'vlaznost',pressure_mm:'pritisak',temp_c:'temperatura',
  vis_km:'vidljivost',wind_dir:'pravac vetra',wind_kph:'brzina vetra'};

    this.cond={}
    this.location ={};
    this.location1 ={};
    this.obj={1:1,2:2,3:3}
 
    this.posaljiZahtev=()=>{
      if(this.state.grad){
    axios.get('http://api.apixu.com/v1/current.json?key=de085ee069884d00975131514181806&q='+this.state.grad)
    .then(response=>{
      console.log(response.data);
      this.setState({data:response.data});

        for(var i in response.data.location){
        this.location1[i]=response.data.location[i]
        }
           for (let i in response.data.current) {
              if (i === 'condition') {
          console.log(i)     
            for (var j in response.data.current.condition) {
                console.log("condition : "+j + ":" + response.data.current[i][j])
           this.cond[j]=response.data.current[i][j];
          }
        } else {
          console.log(i + ":" + response.data.current[i]);
          this.current[i]=response.data.current[i];    
        }
      }

      for(var q in this.current){
        console.log(q);
        for(var qq in this.currentMap){
            if(q==qq){
              var key=this.currentMap[q]
             this.currentSR[key]=this.current[q]
            }
        }
      }
    
      console.log(this.currentSR);
      console.log(this.current);
      console.log(this.cond);
      console.log(this.location1);
          
    }).catch(error=>{
      console.log('nesto weather error catch');
      this.setState({error:true});
    });
}
  }
  console.log(this.current);
  console.log(this.location);
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
    const pritisak = this.state.data.current.pressure_mb;
    const ikonica = this.state.data.current.condition.icon
        this.setState({
          grad:grad,
          temperatura:temperatura,
          drzava:drzava,
          brzinaVetra:brzinaVetra,
          pritisak:pritisak,
          ikonica:ikonica
     
    });

    this.currentSRm=Object.keys(this.currentSR).map((keyName,i)=>{
      return(<p>{keyName}-{this.currentSR[keyName]}</p>)
    });

    this.currentMapK=Object.keys(this.current).map((keyName,i)=>{
      return(<p>{keyName}-{this.current[keyName]}</p>)
    });
    this.objM=Object.keys(this.obj).map((keyName,i)=>{
      return(<p>{keyName}-{this.obj[keyName]}</p>)
    });
    this.location1M=Object.keys(this.location1).map((keyName,i)=>{
      return(<p>{keyName}-{this.location1[keyName]}</p>)
    });
    this.condM=Object.keys(this.cond).map((keyName,i)=>{
      return(<p>{keyName}-{this.cond[keyName]}</p>)
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
            pritisak={this.state.pritisak} 
            ikonica={this.state.ikonica}
           />

           
        <div >
             <button onClick={()=>this.upisiPodatke()}>Upisi rezultate</button>
             <button onClick={()=>this.posaljiZahtev()}>Posalji zahtev</button>
             
        </div>
        { this.currentSRm}
       {this.currentMapK}
       {/* {this.objM}
       {this.location1M}
       {this.condM} */}
      
      <Wheater1 w1={this.state.temperatura}/>
      </div>
    );
  }
}


export default App;

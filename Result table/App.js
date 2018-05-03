import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';


class App extends Component {
    state={
      top100days:[],
      top100Alltime:[],
      current: true
    }

   getFCCData(url, stateName){
    axios.get(url)
   .then(({data}) => {
     this.setState({[stateName]:data });
      console.log(this.state.top100days);
   })
   }

   pointChange(value){
     if(this.state.current !== value){
       this.setState({current:value});
     }
   }

componentDidMount(){
  this.getFCCData('http://fcctop100.herokuapp.com/api/fccusers/top/recent',"top100days");
  this.getFCCData('http://fcctop100.herokuapp.com/api/fccusers/top/alltime',"top100Alltime");
  console.log(this.state.top100days);
}

  render() {
    const {top100days, top100Alltime,current}= this.state;
    return (
      <div className="App container">
         <Table striped bordered condensed hover >
          <thead>
            <tr>
              <th>#</th>
              <th>Camper name</th>
              <th onClick={(event)=>this.pointChange(true)}>Points in 30 days</th>
              <th onClick={(event)=>this.pointChange(false)}>Alltime points</th>
            </tr>
          </thead>
          <tbody>
            {
              top100days.map((row,index)=>{
                return (
                <tr key={row.username}>
                <td>{index +1}</td>
                <td><a href={`https://www.freecodecamp.org/${row.username}`}>
                <Image src={row.img} className="img" circle/> {row.username}
                </a></td>
                <td>{row.recent}</td>
                <td>{row.alltime}</td>
                </tr>
                );
              })
            }
          </tbody>
         </Table>
      </div>
    );
  }
}

export default App;

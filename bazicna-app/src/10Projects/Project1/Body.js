import React, { Component } from 'react';
import Numbers from './Numbers';

class Body extends Component {

    state={
      r:0
    }

    getRandomNumber=()=>{
      this.setState({r:Math.floor(Math.random()*100)});
    }

    render() {
        return (
            <div>
              <button onClick={this.getRandomNumber}>Random number </button>
              <Numbers myNumber={this.state.r}/>
            </div>
        );
    }
}

export default Body;
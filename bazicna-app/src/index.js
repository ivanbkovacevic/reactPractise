import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Osnova extends Component {
    state={
        votes: 0,
        value:''
    }

    add=()=>{
        this.setState({votes:this.state.votes +1});
    }

    subtract=()=>{
        this.setState({votes:this.state.votes -1});
    }

    HandleSubmit=(event)=>{
        event.preventDefault();
     alert("Kliknut je submit i state je"+ this.state.value);
    }

    HandleChange=(e)=>{
       
        this.setState({value:e.target.value});
    }
    
    render() {
        return (
            <div className="uredu">
            <hr/>
                <h2>Dobre ribe</h2>
               <img className="slika" src={this.props.img} alt="kita"/> 
               <p>Da kazes da je dobra</p>          
               <button onClick={this.add}>+1</button>
               <p>Da kazes da nije dobra</p>
               <button onClick={this.subtract}>-1</button>
               <p>Koliko je dobra: {this.state.votes}</p>
               <form onSubmit={this.HandleSubmit}>
                   <label>Upisi
                       <input type="text" value={this.state.value} onChange={this.HandleChange}/>
                   </label>
                   <input type="submit"  value="Submit"/>
               </form>
              
               <p>{this.state.value}</p>

            </div>
        );
    }
}






ReactDOM.render(
<div>
    <Osnova img='https://images.pexels.com/photos/999537/pexels-photo-999537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260.jpeg'/>
    <Osnova img="https://images.pexels.com/photos/300968/pexels-photo-300968.jpeg?cs=srgb&dl=beach-bikini-female-300968.jpg&fm=jpg"/>
    <Osnova img="https://images.pexels.com/photos/323834/pexels-photo-323834.jpeg?cs=srgb&dl=beach-bikini-clouds-323834.jpg&fm=jpg"/>
</div>
,document.getElementById('root'));
registerServiceWorker();

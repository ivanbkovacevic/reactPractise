import React, { Component} from 'react';
import SamoBoja from './SamoBoja';

class JednaBoja extends Component {
     state={
         id: this.props.idBoje,
         odkoga: "od JedneBoje",
         dupliraniId: null,
         bojaSlova: "white"
     };
   

duplirajId=(id)=>{
    console.log(id+"jednabojaprovera");
   
   this.setState({dupliraniId: id*3});
   console.log(this.state.dupliraniId+"proveraDupliranog");
};

 promenaBoje=(bs)=>{
    console.log(bs);

    if(bs==="white"){
        this.setState({bojaSlova:"black"});
    }else{this.setState({bojaSlova:"white"});}
};
    render(){
      
       
        console.log(this.state.id+"jednaBoja");
    let bojaSlova=this.state.bojaSlova;    
    let idBojeZaSamoBoja=this.props.idBoje;
    let imeBoje= this.props.ime;
    let colorStyle ={
        color: bojaSlova,
        backgroundColor:this.props.color,
        heigth:80,
        width:200,
        marginLeft:300
    };
    return (
        <div>
         <h3 style={colorStyle}>{this.props.ime} -jedna boja-</h3>   
         <SamoBoja bojaSlova={colorStyle.backgroundColor}
           imeBoje={imeBoje}
           idBojeZaSamoBoja={idBojeZaSamoBoja}
           duplirajId={this.duplirajId} 
           dupliraniId={this.state.dupliraniId} />
           <button onClick={()=>this.promenaBoje(bojaSlova)}>Promena koja radi</button>
        </div>
    );
};
}
export default JednaBoja;
import React, { Component } from 'react';

const firebase= require('firebase');
const uuid=require('uuid');

var config = {
    apiKey: "AIzaSyAJuR4ulppuhM8KBdsIUWW1dGxK0sZa5K4",
    authDomain: "udemy-indijac.firebaseapp.com",
    databaseURL: "https://udemy-indijac.firebaseio.com",
    projectId: "udemy-indijac",
    storageBucket: "udemy-indijac.appspot.com",
    messagingSenderId: "211819549892"
  };
  firebase.initializeApp(config);

class Usurvey extends Component {

    state={
        uid:uuid.v1(),
        studentName:'',
        answers:{
            answer1:'',
            answer2:'',
            answer3:''
        },
        isSubmitted: false
    }

    nameSubmit=(event)=>{
     let studentName = this.refs.name.value;
     this.setState({studentName:studentName},()=>{console.log(this.state)});
    }
    render() {

        let studentName;
        let questions;

        if(this.state.studentName === '' && this.state.isSubmitted === false){
           studentName = <div>
               <h1>Hey Student, please let us know your name:</h1>
               <form onSubmit={this.nameSubmit}>
                   <input type="text" placeholder="Enter your name" ref="name"/>
               </form>
               </div>;
               questions='';
        }else if (this.state.studentName !== '' && this.state.isSubmitted === false){
                studentName= <h1>Welcome to U-Survey, {this.state.studentName}</h1>;
                questions =<p>hey</p>;
        }
        return (
            <div>
                {studentName}
                -------------------------
                {questions}
            </div>
        );
    }
}

export default Usurvey;
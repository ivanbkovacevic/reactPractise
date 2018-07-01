import React, { Component } from 'react';

const firebase= require('firebase');

var config = {
    apiKey: "AIzaSyDnMDvkJ9B358zL5T0tH46BgW-9Fk6OPW4",
    authDomain: "udemy-indijac-login.firebaseapp.com",
    databaseURL: "https://udemy-indijac-login.firebaseio.com",
    projectId: "udemy-indijac-login",
    storageBucket: "udemy-indijac-login.appspot.com",
    messagingSenderId: "1071557215373"
  };
  firebase.initializeApp(config);

class Authentication extends Component {
        state={
        err:''
        }

    login=(event)=>{
      const email =this.refs.email.value;
      const password =this.refs.password.value;
      console.log(email + " "+password);
   
     const auth = firebase.auth();
     const promise = auth.signInWithEmailAndPassword(email,password);
   
     promise.then(user=>{
         var lout = document.getElementById('logout');
         lout.classList.remove('hide');
     })
   promise.catch(e=>{
    var err = e.message;
     console.log(err);
     this.setState({err});
   });
    }

    signup=(event)=>{
        const email =this.refs.email.value;
        const password =this.refs.password.value;
        console.log(email + " "+password);

        const auth = firebase.auth();

        const promise =  auth.createUserWithEmailAndPassword(email,password);
        promise.then(user=>{
           let err = 'Welcome'+user.email;
            firebase.database().ref('users/'+user.uid).set({
                email:user.email,
                password:password
            });
            console.log(user)
            this.setState({err});
        });
        promise.catch(e=>{
            let err=e.message;
            console.log(err);
            this.setState({err});
        })
    }

    logout=()=>{
        firebase.auth().signOut();
        var lout=document.getElementById('logout');
        lout.classList.add('hide')
    }

    google=(event)=>{
          console.log('im in goole method');
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            firebase.database().ref('users/'+user.uid).set({
                      email:user.email,
                      name:user.displayName
                  });
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        // console.log('im in goole method');
        // var provider = new firebase.auth.GoogleAuthProvider();
        // var promise =  firebase.auth().signInWithPopup(provider);
        // promise.then(result=>{
        //   var user = result.user;
        //   firebase.database().ref('users/'+user.uid).set({
        //       email:user.email,
        //       name:user.displayName
        //   });
        // });
        // promise.catch(e=>{
        //  var msg = e.message;
        //  console.log(msg);
        // });
    }


    render() {
 
        return (
            <div>
                iz authentitaciotn
                <input id="email" ref="email" type="email" placeholder="entero your emailo"/>
                <input id="pass" ref="password" type="password" placeholder="entero your passwordo"/>
                <p>{this.state.err}</p>
                <button onClick={this.login}>Log In</button>
                <button onClick={this.signup}>Sign Up</button>
                <button onClick={this.logout} id="logout" className="hide">Log Out</button><br />
                <button onClick={this.google} id="google" className="google">Sign in with google</button>
         </div>
        );
    }
}

export default Authentication;
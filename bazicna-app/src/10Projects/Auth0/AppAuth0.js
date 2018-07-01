import React, { Component } from 'react';
import GitHub from './GitHub';
import Header from './components/Header';
import './bootstrap.min.css';
import Auth0Lock from 'auth0-lock';

class AppAuth0 extends Component {


    state={
        idToken:'',
        profile:{

        }
    }
    static defaultProps={
        clientId:'6z3VOkB3Ziu09bzGem321J8OH6jcF05B',
        domain:'ivanbkovacevic.eu.auth0.com'
    }

    componentWillMount(){
        this.lock = new Auth0Lock(this.props.clientId,this.props.domain)
        this.lock.on('authenticated',(authResult)=>{
            console.log(authResult);
        })
    }

showLock=()=>{
    this.lock.show();
}

    render() {
        return (
            <div>
                AppAuth0
                <Header onLogin={this.showLock} />
                <GitHub/>
            </div>
        );
    }
}

export default AppAuth0;
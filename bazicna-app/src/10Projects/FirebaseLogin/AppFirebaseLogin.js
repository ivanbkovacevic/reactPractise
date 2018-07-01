import React, { Component } from 'react';
import './FirebaseLogin.css';
import Authentication from './Authentication';



class AppFirebaseLogin extends Component {
    render() {
        return (
            <div>
                RADI LOG IN
                <Authentication />
            </div>
        );
    }
}

export default AppFirebaseLogin;
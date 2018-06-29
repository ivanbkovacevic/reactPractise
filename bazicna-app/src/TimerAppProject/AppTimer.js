import React, { Component } from 'react';
import './AppTimer.css';
import Timer from './Timer';

class AppTimer extends Component {
    render() {
        return (
            <div>
                <Timer start={Date.now()} />
               
            </div>
        );
    }
}

export default AppTimer;
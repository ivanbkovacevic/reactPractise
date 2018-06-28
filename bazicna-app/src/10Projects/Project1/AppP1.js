import React, { Component } from 'react';
import Intro from './Intro';
import Header from './Header';

class AppP1 extends Component {
    sayHello(name){
        return 'Helo ' + name
    }
    render() {
        const name= 'ivan'
        return (
            <div>
                "Kurcina"{name}
                <p>{this.sayHello(' ivan')}</p>
                <Intro />
                <Header />
            </div>
        );
    }
}

export default AppP1;
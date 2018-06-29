import React, { Component } from 'react';
import Intro from './Intro';
import Header from './Header';
import Body from './Body';

class AppP1 extends Component {
    sayHello(name){
        return 'Helo ' + name
    }

    static defaultProps = {
        sastojci:['sir','meso','pljeskavica','batak','sendvic']
    }

   
    render() {
        const name= 'ivan'
        return (
            <div>
                
                <p>{this.sayHello(' ivan')}</p>
                <Intro kita={'neki podatak'} sastojak={'mesom'} brbureka={83727} />
                <Header sastojci={this.props.sastojci}/>
                <h2>Componennt Lifecycle</h2>
                <Body />
            </div>
        );
    }
    
}


export default AppP1;


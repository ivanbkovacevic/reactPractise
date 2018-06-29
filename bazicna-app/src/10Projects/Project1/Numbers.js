import React, { Component } from 'react';

class Numbers extends Component {

    componentWillMount(){
        console.log('component will mount called here')
    }

    componentDidMount(){
        console.log('component DID mount called here')
    }

    componentWillReceiveProps(newProps){
        console.log('componentWillReceiveProps called here');
    }

    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Numbers;
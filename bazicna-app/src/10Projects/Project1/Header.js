import React, { Component } from 'react';

class Header extends Component {
    state={
        sastojci:['ssir','smeso','spljeskavica','sbatak','ssendvic','pizza']
    };

    handleClick=()=>{
        this.setState({sastojci:this.state.sastojci.reverse()});
    }
    render() {
        return (
            <div>
            <p onClick={this.handleClick}>"HEADER Kurcina"</p>
            <div>{this.state.sastojci.map((s,i)=>{
                return <p key={i}> {i}-{s}</p>
            })}</div>
        </div>
        );
    }
}

export default Header;
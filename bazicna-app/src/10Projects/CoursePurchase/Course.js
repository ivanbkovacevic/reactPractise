import React, { Component } from 'react';
import './CoursePurchase.css'

class Course extends Component {
    state={
        active:false
    }

    clicker=()=>{
        let active=!this.state.active;
        this.setState({active:active});
        this.props.sumPrice(active ? this.props.price : - this.props.price);
    }

    render() {
        return (
            <div>
                <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name}<b>{this.props.price}</b></p>
            </div>
        );
    }
}

export default Course;
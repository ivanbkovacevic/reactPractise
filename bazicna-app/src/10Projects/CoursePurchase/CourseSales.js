import React, { Component } from 'react';
import Course from './Course';

class CourseSales extends Component {
state={
  total:0
};

sumPrice=(price)=>{
   this.setState({total: this.state.total + price});
}

    render() {

        let courses = this.props.items.map((kurs,i)=>{
            return <Course name={kurs.name} 
            price={kurs.price} 
            key={kurs.i}
            sumPrice={this.sumPrice}
            active={kurs.active}/> 
            
            
        })

        return (
            <div>
                 <h3>You can bye courses:</h3>
            <div id="couses"> 
                {courses}
                <p id="total">Total amount: <b>{this.state.total}</b></p>
            </div>
            </div>
        );
    }
}

export default CourseSales;
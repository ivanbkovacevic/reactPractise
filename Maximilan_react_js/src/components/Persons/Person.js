import React, { Component} from 'react';
import classes from './Person.css';
import WithClass from '../../HOC/WithClass';
import Proptypes from 'prop-types';

class Person extends Component {
    render (){
      return (
       <WithClass classes={classes.Person}>
           <p
              onClick={this.props.click}
           >Im a {this.props.name} and im {this.props.age} years old</p>
           <p>{this.props.children}</p>
             <input type="text" onChange={this.props.changed} value={this.props.name} />
             </WithClass>
           )
    };
}

Person.Proptypes={
  click: Proptypes.func,
  name: Proptypes.string,
  age: Proptypes.number,
  changed: Proptypes.func
};
  
export default Person;
import React, { Component } from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props);
    }

    removeTodo(id){
        this.props.removeTodo(id);
    }
    render(){
        return(
            <div>
                <li><button onClick={(e)=>this.removeTodo(this.props.id)}>remove</button>{this.props.todo}</li> 
               
            </div>
        );
    }
}


    export default TodoItem;
    

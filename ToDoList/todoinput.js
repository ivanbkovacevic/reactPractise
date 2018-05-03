import React, { Component } from 'react';

class TodoInput extends Component{
    constructor(props){
        super(props);
        this.state={
                value:""
        }

        this.HandleChange=this.HandleChange.bind(this);
        this.addTodo=this.addTodo.bind(this);
    }

     HandleChange(e){
        this.setState({value:e.target.value})
     }

     addTodo(todo){
         //ensure that no empty is submitted
         if (todo.length >0) {
             this.props.addTodo(todo);
             this.setState({value:" "});
         }

     }
      
     

    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.HandleChange}/>
                <button  className="btn btn-primary" onClick={()=>this.addTodo(this.state.value)}>Submit</button>
            </div>
        );
    }
}

export default TodoInput;
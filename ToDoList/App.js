import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Header from './components/header';
import TodoInput from './components/todoinput';
import TodoItem from './components/todoItem';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todos:[
        {id:0 , text:"feed dog"},
        {id:1 , text:"make dinner"},
        {id:2 , text:"learn React"}
      ],
      nextId:3
    }

    this.addTodo=this.addTodo.bind(this);
    this.removeTodo=this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todos=this.state.todos.slice();
    todos.push({id:this.state.nextId, text:todoText});
    this.setState({
      todos:todos,
      nextId: ++this.state.nextId
    });
  }

  removeTodo(id){
    this.setState({
      todos: this.state.todos.filter((todo,index)=>
        todo.id !== id
      )

    });
  }

  render() {
    return (
      <div className="App">
          <div className="todo-wraper">
           <Header />
           <TodoInput todo="" addTodo={this.addTodo}/>
           <ul>
           {
             this.state.todos.map((to)=>{
               return (
               <TodoItem todo={to.text} key={to.id} id={to.id} removeTodo={this.removeTodo} />
              );
             })
            }
           </ul>
            
          </div>
 
      </div>
    );
  }
}

export default App;

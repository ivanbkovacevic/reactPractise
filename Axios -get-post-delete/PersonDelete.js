import React, { Component } from 'react';
import axios from 'axios';

class PersonDelete extends Component {
    state= {
        id: 0
    };

    handleChange = event =>{
        this.setState({id:event.target.value});
    }

  handleSubmit= event =>{
      event.preventDefault();
     

 axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
 .then(res =>{
   console.log(res);
 })
}

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person ID:
                    <input type="number" name="id" onChange={this.handleChange}/>
                    </label>
                    <button type="submit">Delete</button>
            </form>
        </div>
        );
    }
}

export default PersonDelete;
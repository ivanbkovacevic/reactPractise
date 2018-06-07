import React, { Component } from 'react';

class AddCategori extends Component {

    handleSubmit=(event)=> {
        alert('A name was submitted: ' );
        event.preventDefault();
      }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:  <input type="text"/>
                    </label>
                    <label>
                      Model:  <input type="text"/>
                    </label>
                    <label>
                        Weigth: <input type="text"/>
                    </label>
                    <button type="Submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default AddCategori;
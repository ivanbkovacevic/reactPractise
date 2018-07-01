import React, { Component } from 'react';
import axios from 'axios';

class Apicall extends Component {

    componentWillMount(){
        this.getReddit();
    }
    // https://www.reddit.com/r/space/
   getReddit=()=>{
       axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
       .then(response =>{
           const post = response.data.data.children.map(obj=>obj.data);
           this.setState({post});
       });
   }

   state={
       post:[],
       subr:'space'
   };
    render() {
        return (
            <div>
                <h1>{`/r/${this.state.subr}`}</h1>
                <ul>
                    {this.state.post.map(post=>{
                        return <li key={post.id}>{post.title}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Apicall;
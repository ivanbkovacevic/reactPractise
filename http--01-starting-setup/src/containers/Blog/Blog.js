import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
//import NewPost from '../NewPost/NewPost';
import Vezba from '../vezba';

const AsyncNewPost = asyncComponent(()=>{
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth: true,
        kita:"kurcina"
    }
    render () {
        return (
            <div >
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                            to="/posts/" 
                            exact
                            activeClassName="active"
                            activeStyle={{
                                color: '#fa923f',
                                textDecoration: 'underline'
                            }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname:'/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
               {/* <Route path="/" exact render={()=><h1>home</h1>} />
               <Route path="/"  render={()=><h1>home2</h1>} /> */}
               
               <Switch>
                   {this.state.auth ? <Route path="/new-post"  component={AsyncNewPost}  /> : null }
                   <Route render={()=><h1>Not found</h1>} />
                    {/* <Route path="/posts/" component={Posts} />
                    <Redirect from="/" to="/posts" /> */}
                   
               </Switch>
               <Vezba kita={this.state.kita}/>
            </div>
        );
    }
}

export default Blog;
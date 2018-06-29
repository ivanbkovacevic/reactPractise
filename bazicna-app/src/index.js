import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../src/WheaterApp/index.css';
// import AppWheater from '../src/WheaterApp/AppWheater';
import registerServiceWorker from './registerServiceWorker';
// import Router from './components/Recepti/Router';
import AppP1 from '../src/10Projects/Project1/AppP1';
import AppBlogProject from './10Projects/BlogProject/AppBlogProject';



ReactDOM.render(
<div>
    {/* <AppWheater /> */}
    {/* <Router /> */}
    {/* <AppP1 /> */}
    <AppBlogProject />
</div>,document.getElementById('root'));
registerServiceWorker();

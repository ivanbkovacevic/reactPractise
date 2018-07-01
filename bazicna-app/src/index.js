import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import '../src/WheaterApp/index.css';
import AppWheater from '../src/WheaterApp/AppWheater';
import registerServiceWorker from './registerServiceWorker';
// import Router from './components/Recepti/Router';
import AppP1 from '../src/10Projects/Project1/AppP1';
import AppBlogProject from './10Projects/BlogProject/AppBlogProject';
import AppTimer from './TimerAppProject/AppTimer';
import AppCousePurchase from '../src/10Projects/CoursePurchase/AppCousePurchase';
import AppNewRouter from './10Projects/NewRouter/AppNewRouter';

import Home from './10Projects/NewRouter/Home';
import Contact from './10Projects/NewRouter/Contact';
import NoPage from './10Projects/NewRouter/NoPage';
import ContactSub from './10Projects/NewRouter/ContactSub';
import AppUsurvey from './10Projects/FireBase01/AppUsurvey';
import AppFirebaseLogin from './10Projects/FirebaseLogin/AppFirebaseLogin';
import AppAPI from './10Projects/APICall/AppAPI';
import AppAuth0 from './10Projects/Auth0/AppAuth0';

ReactDOM.render(
 <Router>
    <div>
        {/* <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/contact">CONTACT-ME</Link></li>     
        </ul>
        <hr />
        <Route exact path="/" component={Home}/>
        <Route path="/contact" component={Contact}>
        <Route path="*" component={NoPage}/>
        <Route path="/contact/:sub" component={ContactSub}/>
        </Route> */}

        
    {/* <AppWheater /> */}
    {/* <Router /> */}
    {/* <AppP1 /> */}
    {/* <AppBlogProject /> */}
    {/* <AppTimer /> */}
    {/* <AppCousePurchase /> */}
    {/* <AppNewRouter /> */}
    {/* <AppUsurvey /> */}
    {/* <AppFirebaseLogin /> */}
    {/* <AppAPI /> */}
    <AppAuth0 />
    </div>
</Router>   

,document.getElementById('root'));
registerServiceWorker();

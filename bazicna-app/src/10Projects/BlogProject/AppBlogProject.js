import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import Categori from './Categori';
import AtYourServis from './AtYourServis';

class AppBlogProject extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <Header />
            <AtYourServis />
            <Categori />
            <Footer />
          </div>   
        );
    }
}

export default AppBlogProject;
import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import '../bootstrap.min.css';

class Header extends Component {

    onLogin=()=>{
        this.props.onLogin();
    }
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        GITHUB SEARCHER
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem onClick={this.onLogin} href="#">LogIn</NavItem>
                </Nav>
            </Navbar>
                
            
        );
    }
}

export default Header;
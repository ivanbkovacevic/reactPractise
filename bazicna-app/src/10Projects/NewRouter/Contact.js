import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
    render() {
        return (
            <div>
                CONTACT-ME
                <p><Link to="/contact/sub">CONTACTS-SUB</Link></p>
                {this.props.children}
            </div>
        );
    }
}

export default Contact;
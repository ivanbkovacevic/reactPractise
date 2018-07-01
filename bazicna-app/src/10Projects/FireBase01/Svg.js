import React, { Component } from 'react';

class Svg extends Component {
    render() {
        return (
            <div>
                <h1>SVG</h1>
                <svg width="250" height="250" stroke="red">
                <circle r="125" cx="100" cy="150"
                 fill="none" 
                 stroke="black"
                />
                <circle r="125" cx="125" cy="125"/>
                <rect x="0" y="0" height="100" width="100"/>
                </svg>
                <svg width="400" height="400">
                <rect rx="25" ry="25" x="50" y="50" height="100" width="100" fill="lightBlue"/>
                <line x1="0" y1="0" x2="400" y2="400" stroke="green" stroke-width="25"/>
                <line x1="400" y1="0" x2="0" y2="400" stroke="red" stroke-width="25"/>
                <polygon fill="pink" points="50,50 200,50 200,200 50,100 125,125"/>
                </svg>
                <h1>SVG</h1>
            </div>
        );
    }
}

export default Svg;
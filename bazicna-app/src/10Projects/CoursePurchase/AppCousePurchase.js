import React, { Component } from 'react';
import CourseSales from './CourseSales';

class AppCousePurchase extends Component {

    render() {
        var courses = [
            {name: 'Complete ioS dev course', price: 50},
            {name: 'Complete CSS course', price: 502},
            {name: 'Complete HTML dev course', price: 501},
            {name: 'Complete React dev course', price: 520}
        ];

        return (
            <div>
                <h2>Welcome to course sales page</h2>
                <ol>
                <CourseSales items={courses} />
                </ol>
               
            </div>
        );
    }
}

export default AppCousePurchase;
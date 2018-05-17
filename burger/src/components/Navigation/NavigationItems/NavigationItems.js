import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <div>
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/" active >Burger Builder</NavigationItem>
                <NavigationItem link="/">CheckOut</NavigationItem>
            </ul>
        </div>
    );
};

export default NavigationItems;
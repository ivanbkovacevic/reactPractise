import React from 'react';
import Auks from '../../higheroc/auks';
import classes from './Layout.css'

const Layout = (props)=>(
   <Auks>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auks>

);

export default Layout;
import React from 'react';
import Auks from '../../hoc/Auks';

const Layout = (props)=>(
   <Auks>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main>
        {props.children}
    </main>
    </Auks>

);

export default Layout;
import React, {Component} from 'react';
import Auks from '../../higheroc/auks';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: true
    }

sideDrawerClosedHandler = ()=>{
 this.setState({showSideDrawer:false});
}

    render (){
        return (
            <Auks>
            <Toolbar />
            <SideDrawer 
            open={this.state.showSideDrawer} 
             closed={this.sideDrawerClosedHandler}/>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auks>
        );
    }
  
};

export default Layout;
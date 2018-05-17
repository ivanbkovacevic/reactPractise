import React, {Component} from 'react';
import Auks from '../Auks/auks';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state={
        showSideDrawer: false
    }

sideDrawerClosedHandler = ()=>{
 this.setState({showSideDrawer:false});
}

sideDrawerToggleHandler = () => {
  this.setState( (prevState) =>{
      return { showSideDrawer: !prevState.showSideDrawer }
    });
  
}

    render (){
        return (
            <Auks>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer 
             open={this.state.showSideDrawer} 
             closed={this.sideDrawerClosedHandler}
             />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auks>
        );
    }
  
};

export default Layout;
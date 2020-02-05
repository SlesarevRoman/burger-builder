import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  render () {
    return (
      <Wrapper>
        <Toolbar />
        <SideDrawer 
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={styles.сontent}>
          {this.props.children}
        </main>
      </Wrapper>
    );
  }
}

export default Layout;

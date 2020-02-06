import React, {Component} from 'react';
import Wrapper from '../Wrapper/Wrapper';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    });
  }

  sideDrawerToggleHandler = () => {
    this.setState( (prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer
      }
    });
  }

  render () {
    return (
      <Wrapper>
        <Toolbar 
          drawerToggleClicked={this.sideDrawerToggleHandler}
        />
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

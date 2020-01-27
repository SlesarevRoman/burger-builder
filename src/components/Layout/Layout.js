import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';


const layout = (props) => (
  <Wrapper>
    <Toolbar />
    <SideDrawer />
    <main className={styles.сontent}>
      {props.children}
    </main>
  </Wrapper>
  
);

export default layout;

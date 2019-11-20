import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import styles from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';


const layout = (props) => (
  <Wrapper>
    <Toolbar />
    <main className={styles.сontent}>
      {props.children}
    </main>
  </Wrapper>
  
);

export default layout;

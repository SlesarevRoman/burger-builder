import React from 'react';
import Wrapper from '../../hoc/Wrapper';
import styles from './Layout.module.css';


const layout = (props) => (
  <Wrapper>
    <div>Toolbar, Sidebar, Backdrop</div>
    <main className={styles.сontent}>
      {props.children}
    </main>
  </Wrapper>
  
);

export default layout;

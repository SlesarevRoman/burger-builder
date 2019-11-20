import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <ul className={styles.NavigationItem}>
    <NavigationItem
      link="/"
      active
    >
      Burger Builder
    </NavigationItem>

    <NavigationItem
      link="/"
      active
    >
      Checkout
    </NavigationItem>
  </ul>
);

export default navigationItems;

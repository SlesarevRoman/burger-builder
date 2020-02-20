import React from 'react';
import styles from './Order.module.css';

const order = (props) => (
  <div className={styles.Order}>
    <p>Ingrediets: Salad (1)</p>
    <p>Total price is <strong>USD 5.45</strong></p>
  </div>
)

export default order;
// AuthNavi.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNavi.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration" className={styles.link} activeClassName={styles.active}>
        Registration
      </NavLink>
      <NavLink to="/login" className={styles.link} activeClassName={styles.active}>
        Login
      </NavLink>
    </div>
  );
}

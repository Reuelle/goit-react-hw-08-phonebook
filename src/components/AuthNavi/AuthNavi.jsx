import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNavi.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/registration" className={styles.link} activeclassname={styles.active}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={styles.link} activeclassname={styles.active}>
        Login
      </NavLink>
    </div>
  );
}

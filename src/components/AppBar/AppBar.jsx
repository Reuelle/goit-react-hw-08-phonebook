import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNavi/AuthNavi';
import styles from './AppBar.module.css'; // Import the CSS module
import { useAuth } from '../hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  const renderNavigation = () => {
    return isLoggedIn ? <UserMenu /> : <AuthNav />;
  };

  return (
    <header className={styles.header}>
      <Navigation />
      {renderNavigation()}
    </header>
  );
};

export default AppBar;

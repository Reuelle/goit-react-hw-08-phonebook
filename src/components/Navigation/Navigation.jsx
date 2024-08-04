
import styles from './Navigation.module.css';

import { useAuth } from '../hooks';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contacts" className={styles.link}>
          Phonebook
        </Link>
      )}
    </nav>
  );
};

export default Navigation;

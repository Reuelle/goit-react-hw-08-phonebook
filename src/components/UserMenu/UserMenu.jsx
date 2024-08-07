import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/Auth/Auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './icons8-avatar.gif';
import styles from './UserMenu.module.css';
import { ReactComponent as AddIcon } from '../hooks/log-out-svg.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useAuth();

  // Return null or a loading indicator while checking authentication state
  if (!isLoggedIn) {
    return null; // or a loading indicator
  }

  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <p className={styles.name}>Welcome! {user.name}</p>
      <button className={styles.button} type="button" onClick={() => dispatch(logOut())}>
        <AddIcon />
      </button>
    </div>
  );
}

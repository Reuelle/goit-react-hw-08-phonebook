import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/Auth-operations';
import { useAuth } from '../hooks';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css'; // Import the CSS module
import { ReactComponent as AddIcon } from '../icons/logout.svg';

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const avatar = defaultAvatar;

  return (
    <div className={styles.container}>
      <img className={styles.avatar} src={avatar} alt="avatar" />
      <p className={styles.name}>Welcome {user.name}</p>
      <button className={styles.button} type="button" onClick={() => dispatch(logOut())}>
        <AddIcon />
      </button>
    </div>
  );
}

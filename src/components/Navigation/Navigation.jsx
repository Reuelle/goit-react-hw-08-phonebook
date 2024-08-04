import { useAuth } from '../hooks';
import { Links } from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Links to="/" end>
        Home
      </Links>
      {isLoggedIn && <Links to="/contacts">Phonebook</Links>}
    </nav>
  );
};

export default Navigation;

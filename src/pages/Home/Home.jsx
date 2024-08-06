import { BiSolidEditAlt } from 'react-icons/bi';
import {
  FcBusinessContact,
  FcCellPhone,
  FcConferenceCall,
} from 'react-icons/fc';

const styles = {
  container: {
    minHeight: 'calc(50vh - 50px)',
    minWidth: 'calc(50vw - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 700,
    fontSize: 30,
    textAlign: 'center',
  },
};

const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Phonebook</h1>
  
  </div>
);

export default Home;

// Example component file
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operation'; // Ensure this path is correct
import PropTypes from 'prop-types';
import css from '../ContactList/ContactList.module.css';

export const AddContactButton = ({ newContact }) => {
  const dispatch = useDispatch();

  const handleAdd = () => dispatch(addContact(newContact));

  return (
    <button
      type="button"
      className={css.addContactBtn}
      onClick={handleAdd}
    >
      Add Contact
    </button>
  );
};

AddContactButton.propTypes = {
  newContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

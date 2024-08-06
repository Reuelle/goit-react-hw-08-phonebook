import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice/filter'; // Adjust the path if needed
import { selectContacts, selectFilter } from '../../redux/selector'; // Adjusted to the correct path
//import css from './Filter.module.css'; // Import css if you are using it

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return contacts.length < 1 ? (
    <h2>Add your first contact</h2> // Changed Title to h2 for clarity
  ) : (
    <input
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;

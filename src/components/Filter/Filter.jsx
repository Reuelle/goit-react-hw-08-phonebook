// If `css` is not used in your component, remove the import:
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/slice/filter'; // Adjust the path if needed
import { selectContacts, selectFilter } from '../../redux/selector'; // Adjust the path if needed

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts) || [];

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return contacts.length < 1 ? (
    <h2>Add your first contact</h2>
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

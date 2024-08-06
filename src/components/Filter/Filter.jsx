import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/slice/filter';
import { selectContacts, selectFilter } from 'redux/selectors'; // Import selectors
import { FcSearch } from 'react-icons/fc'; // Import if you plan to use it

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts); // Use the selector here

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return contacts.length < 1 ? (
    <h2>Add your first contact</h2> // Use a standard HTML tag if Title is not a component
  ) : (
    <input // Use standard input if InputStyles is not a component
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
    />
  );
}

export default Filter;

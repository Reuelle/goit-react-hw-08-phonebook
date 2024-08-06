import React from 'react'; // Add this if not already present
import { useDispatch, useSelector } from 'react-redux'; // Import useSelector here
import { setFilter } from 'redux/slice/filter';
import { FcSearch } from 'react-icons/fc';
// Import Title and InputStyles if they are custom components
// import Title from 'path/to/Title';
// import InputStyles from 'path/to/InputStyles'; 

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <h2>Add your first contact</h2> // Use h2 or another appropriate HTML tag if Title is not a component
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

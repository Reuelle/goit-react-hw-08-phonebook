import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/slice/filter';
import { FcSearch } from 'react-icons/fc';
import { selectContacts, selectFilter } from 'redux/selectors';

  
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <Title>Add your first contact</Title>
  ) : (
    <InputStyles
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      prefix={<FcSearch />}
    />
  );
}

export default Filter;

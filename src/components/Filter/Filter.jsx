import PropTypes from 'prop-types';
import css from './filter.module.css';

export default function Filter({ filter, setFilter }) {
  return (
    <>
      <label className={css['filter__label']} htmlFor="filter">
        Find contacts by name
      </label>
      <input
        className={css['filter__input']}
        type="text"
        name="filter"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};

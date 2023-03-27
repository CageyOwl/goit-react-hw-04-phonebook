import PropTypes from 'prop-types';
import css from './contactsList.module.css';

export default function ContactListItem({ id, name, number }) {
  return (
    <li>
      {name}: {number}
      <button className={css['contact-list__button']} id={id}>
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

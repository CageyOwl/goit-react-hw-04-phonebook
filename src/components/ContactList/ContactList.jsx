import PropTypes from 'prop-types';
import ContactListItem from "./ContactListItem";

export default function ContactList({ contacts, filter, deleteContact }) {
  const list = filter
    ? contacts.filter(contact => contact.name.match(new RegExp(filter, 'gi')))
    : contacts;

  return (
    <ul onClick={deleteContact}>
      {list.map(item => 
        <ContactListItem
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
        />
      )}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filter: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};
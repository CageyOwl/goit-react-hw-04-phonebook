import { nanoid } from 'nanoid';
import useLocalStorage from '../services/useLocalStorage';
import * as storageKeys from '../services/localStorageKeys';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './app.module.css';


export function App() {
  const [contacts, setContacts] = useLocalStorage(storageKeys.CONTACTS_KEY, []);
  const [filter, setFilter] = useLocalStorage(storageKeys.FILTER_KEY, '');

  const addContact = contactFormValues => {
    const { name, number } = contactFormValues;

    const isInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(() => [...contacts, { id: nanoid(), ...contactFormValues }]);
  };

  const deleteContact = event => {
    setContacts(() =>
      contacts.filter(contact => contact.id !== event.target.id)
    );
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} setFilter={event => setFilter(event.target.value)} />
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={deleteContact}
      />
    </div>
  );
}

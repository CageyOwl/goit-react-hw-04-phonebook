import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './contactForm.module.css';

export default function ContactForm({ addContact }) {
  const [state, setState] = useState({ name: '', number: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact(state);
    for (let key in state) {
      state[key] = '';
    }
  };

  return (
    <form className={css['adding-form']} onSubmit={handleSubmit}>
      <label className={css['adding-form__label']} htmlFor="name">
        Name
      </label>
      <input
        className={css['adding-form__input']}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={state.name}
        onChange={handleChange}
      />

      <label className={css['adding-form__label']} htmlFor="number">
        Phone
      </label>
      <input
        className={css['adding-form__input']}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={state.number}
        onChange={handleChange}
      />

      <button className={css['adding-form__button']} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

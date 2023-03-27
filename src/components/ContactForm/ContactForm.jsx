import React from 'react';
import PropTypes from 'prop-types';
import css from './contactForm.module.css';

export default class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { addContact } = this.props;
    addContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css['adding-form']} onSubmit={this.handleSubmit}>
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
          value={this.state.name}
          onChange={this.handleChange}
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
          value={this.state.number}
          onChange={this.handleChange}
        />

        <button className={css['adding-form__button']} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

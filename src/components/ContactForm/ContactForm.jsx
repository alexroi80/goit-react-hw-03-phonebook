import { Component } from 'react';
import css from './ContactForm.module.css';
import PropTypes from "prop-types";
import { INITIAL_FORM_STATE } from 'components/INITIALS/INITIAL_FORM-STATE';
import { nanoid } from 'nanoid';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired, 
    };

  state = { ...INITIAL_FORM_STATE};

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_FORM_STATE });
  };
  nameId = nanoid();
  numberId=nanoid();


  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label htmlFor={this.nameId} className={css.label}>Name</label>
        <input
          type="text"
          className={css.input}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          id={this.nameId}
          onChange={this.handleChange}
        />
        <label htmlFor={this.numberId} className={css.label}>Number</label>
        <input
          type="tel"
          className={css.input}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          id={this.numberId}
          onChange={this.handleChange}
        />
        <button type="submit" className={css.btn}>Add contact</button>
      </form>
    );
  }
}

import { Component } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./ContactForm.module.css";

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const accessName = this.props.masContact.find(
      (el) => el.name === this.state.name
    );

    if (accessName) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.onSubmit(this.state);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label htmlFor={this.nameInputId} className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            id={this.nameInputId}
            className={s.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
          />
        </label>

        <label htmlFor={this.numberInputId} className={s.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            id={this.numberInputId}
            className={s.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

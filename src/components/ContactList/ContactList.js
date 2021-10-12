import PropTypes from "prop-types";
import s from "./ContactList.module.css";

const ContactList = ({ contact, onDelite }) => {
  return (
    <ul className={s.list}>
      {contact.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}</p>
          <p className={s.number}>{number}</p>
          <button
            type="button"
            className={s.button}
            onClick={() => onDelite(id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelite: PropTypes.func.isRequired,
};

export default ContactList;

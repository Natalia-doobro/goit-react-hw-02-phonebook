import PropTypes from "prop-types";
import shortid from "shortid";
import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  const filterInputId = shortid.generate();
  return (
    <label htmlFor={filterInputId} className={s.label}>
      Filter contacts by name
      <input
        type="text"
        id={filterInputId}
        className={s.input}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;

import PropTypes from "prop-types";
import css from './Filter.module.css';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const filterInputId = nanoid();
  return (
    <div className={css.container}>
      <label htmlFor={filterInputId} className={css.label}>Find contacts by name</label>
      <input
        type="text"
        className={css.input}
        value={value}
        onChange={onChange}
        id={filterInputId}
      ></input>
    </div>
  );
};
Filter.propTypes={
    value:PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
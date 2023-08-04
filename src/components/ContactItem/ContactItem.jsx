import css from './ContactItem.module.css';
import PropTypes from "prop-types";
import {BsTelephone} from "react-icons/bs";

export const ContactItem = ({name, number, id, onDelete}) =>{
    return (
        <li className={css.listItem} key={id}>
            <BsTelephone/>
            <p className={css.itemInfo}>{name}: {number}</p>
            <button type="button" className={css.btn} onClick={onDelete} id={id}>Delete</button>
        </li>
    )
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
  };



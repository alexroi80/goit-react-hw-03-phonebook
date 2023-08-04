import { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from "prop-types";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component{
    static propTypes = {
       contacts: PropTypes.array.isRequired,
       onDelete: PropTypes.func.isRequired,
        
       };
 

    render(){
      const {contacts, onDelete} = this.props 
      return(
        <ul className={css.list}>
            {contacts.map(({name, number,id})=>{
              return(<ContactItem name={name} number={number} id={id} onDelete={onDelete} key={id}/>)  
    })}
        </ul>
      )
    }

    }

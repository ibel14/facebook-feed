import React from 'react';
import './contacts.css';
import ContactItems from './contacts-items';

const Contacts = () => {
    return (
        <ul className="contact-list list-group">
            <ContactItems label='Pedro Rodriguez'/>
            <ContactItems label='Javier Sosa'/>
            <ContactItems label='John Smith'/>
            <ContactItems label='John Smith'/>
            <ContactItems label='John Smith'/>
            <ContactItems label='John Smith'/>
            <ContactItems label='John Smith'/>
            <ContactItems label='John Smith'/>
        </ul>
    )
}

export default Contacts;
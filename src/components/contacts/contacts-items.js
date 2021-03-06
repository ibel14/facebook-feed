import React from 'react';

import './contacts';

const ContactItems = (props) => {

    return (
        <li className="contacts-items justify-content-flex-end">
            <div>
            <span className="contacts-item-label">
                <button
                variant="contained" 
                color="primary"
                type="submit"
                className="btn btn-outline-secondary"
                >{props.label}</button>
            </span>
            </div>
        </li>
    )
}

export default ContactItems;
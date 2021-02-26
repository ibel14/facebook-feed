import React from 'react';

import './contacts';

const ContactItems = (props) => {

    return (
        <li className="contacts-items justify-content-flex-end">
            <div>
            <span className="contacts-item-label">
                {props.label}
            </span>
            </div>
        </li>
    )
}

export default ContactItems;
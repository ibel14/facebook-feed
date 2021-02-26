import React from 'react';

import './side-bar';

const BarItems = (props) => {

    return (
        <li className="bar-items flex-direction-column">
            <div>
            <span className="bar-item-label">
                {props.label}
            </span>
            </div>
        </li>
    )
}

export default BarItems;
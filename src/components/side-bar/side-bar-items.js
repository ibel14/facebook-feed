import React from 'react';

import './side-bar';

const BarItems = (props) => {

    return (
        <li className="bar-items flex-direction-column">
            <div>
            <span className="bar-item-label">
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

export default BarItems;
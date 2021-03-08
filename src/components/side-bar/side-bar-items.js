import React from 'react';

import './side-bar';
import { Avatar } from '@material-ui/core';

const BarItems = (props) => {

    return (
        <>
        <li className="bar-items">
            
                <Avatar className="avatar-img"/>
            <span>
                <button>{props.label}</button>
            </span>
        
        </li>
        </>
    )
}

export default BarItems;
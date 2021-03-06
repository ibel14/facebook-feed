import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import { Avatar } from '@material-ui/core';


import './app-header.css';

const AppHeader = () => {

    return (
        <div className="appheader">
      
            <div className="profile">
                <h1>Roberto</h1>
                <Avatar/>
            </div>

            <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск на Facebook"
            />

            <FacebookIcon
            classname="logo"
            type="button"
            color="primary"
            fontSize="large"
            />
            
        </div>
    )
}

export default AppHeader;
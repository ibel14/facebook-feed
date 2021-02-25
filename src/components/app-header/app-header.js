import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

import './app-header.css';

const AppHeader = () => {
    return (
        <div className="appheader">
            <h1>Igor Belousov</h1>

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
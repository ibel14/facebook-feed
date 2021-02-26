import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import Avatar from '@material-ui/core/Avatar';

import './app-header.css';

const AppHeader = () => {

    return (
        <div className="appheader">
            <div className="profile-img">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </div>
            <h1>Roberto</h1>

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
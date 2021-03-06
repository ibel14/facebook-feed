import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import HomeIcon from '@material-ui/icons/Home';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ShopIcon from '@material-ui/icons/Shop';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

import { Avatar } from '@material-ui/core';


import './app-header.css';

const AppHeader = () => {

    return (
        <div className="appheader">

            <div className="fb-logo">
                <FacebookIcon
                classname="logo"
                type="button"
                color="primary"
                style={{ fontSize: 50 }}
                />
            </div>

            <input
                className="search-input"
                type="text"
                placeholder="Поиск на Facebook"
            />


            <div className="nav-panel">
                <HomeIcon
                classname="logo"
                type="button"
                color="white"
                style={{ fontSize: 50 }}
                />

                <PeopleOutlineIcon
                classname="logo"
                type="button"
                color="white"
                style={{ fontSize: 50 }}
                />

                <ShopIcon
                classname="logo"
                type="button"
                color="white"
                style={{ fontSize: 50 }}
                />

                <EmojiEmotionsIcon
                classname="logo"
                type="button"
                color="white"
                style={{ fontSize: 50 }}
                />

                <SportsEsportsIcon
                classname="logo"
                type="button"
                color="white"
                style={{ fontSize: 50 }}
                />
            </div>

            <div className="profile">
                <h1>Igor</h1>
                <Avatar/>
            </div>
        </div>
    )
}

export default AppHeader;
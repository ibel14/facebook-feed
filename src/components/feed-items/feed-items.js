import React from 'react';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';


import './feed-items.css';

const FeedItem = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <>
        <li className="feed-item">
            <section>
            <div className="menu-feed">
                <MoreHorizIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Save</MenuItem>
                    <MenuItem onClick={handleClose}>Hide this post</MenuItem>
                    <MenuItem onClick={handleClose}>Complain</MenuItem>
                </Menu>
            </div>
            
                <div className="user">
                    <Avatar className="avatar-img"/>
                    {props.user}
                </div>

                <span className="app-item-label">
                    {props.label}
                </span>
                <img className="post-img" src={props.url} alt=''></img>

                <div className="counters">
                    <ThumbUpAltIcon 
                    variant="containted"
                    color="primary"
                    type="button"
                    />
                    
                </div>
                <div className="share-comments">
                    <p>Поделились: {props.share}</p>
                    <p>Комментарии: {props.comments}</p>
                </div>
                </section>
        </li>
        </>
    )
}

export default FeedItem;
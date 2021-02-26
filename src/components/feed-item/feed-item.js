import React from 'react';

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './feed-item.css';

const FeedItem = (props) => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <li className="app-item flex-direction-column">
            <div>
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

                <div className="user">user</div>
                <span className="app-item-label">
                    {props.label}
                </span>
                <img className="feed-img" src='url' alt='title'></img>
                <div className="flex-direction-column">
                    <ThumbUpAltIcon type="button">
                        <i className=""></i>
                    </ThumbUpAltIcon>
                    <p className="share">
                        Поделились: {'3'}
                    </p>
                    <p className="comments">
                        Комментарии: {'6'}
                    </p>
                </div>
        </li>
    )
}

export default FeedItem;
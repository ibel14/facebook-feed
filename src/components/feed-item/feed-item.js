import React from 'react';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';

import './feed-item.css';

const FeedItem = () => {
    return (
        <li className="app-item flex-direction-column">
                <span className="app-item-label">
                    Facebook post
                </span>
                <div className="flex-direction-column">
                    <ThumbUpAltIcon type="button">
                        <i className=""></i>
                    </ThumbUpAltIcon>
                </div>
        </li>
    )
}

export default FeedItem;
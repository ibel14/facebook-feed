import React from 'react';

import './feed-item.css';

const FeedItem = () => {
    return (
        <li className="app-item flex-direction-column">
                <span className="app-item-label">
                    Facebook post
                </span>
                <div className="flex-direction-column">
                    <button type="button">
                        <i className="glyphicon glyphicon-thumbs-up"></i>
                    </button>
                </div>
        </li>
    )
}

export default FeedItem;
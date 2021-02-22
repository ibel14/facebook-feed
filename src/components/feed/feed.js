import React from 'react';

import './feed.css';
import FeedItem from '../feed-item';

const Feed = () => {
    return (
        <ul className="app-list list-group">
            <FeedItem/>
            <FeedItem/>
            <FeedItem/>
        </ul>
    )
}

export default Feed;
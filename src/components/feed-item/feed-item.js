import React from 'react';

const FeedItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
                <span className="app-list-item-label">
                    Facebook post
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button className="btn-star btn-sm">
                        <i className="fa fa-star"></i>
                    </button>
                </div>
        </li>
    )
}

export default FeedItem;
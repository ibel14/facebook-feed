import React from 'react';

import './feed-add-post.css';

const FeedAddPost = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Что у вас нового, Igor?"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Опубликовать</button>
        </form>
    )
}

export default FeedAddPost;
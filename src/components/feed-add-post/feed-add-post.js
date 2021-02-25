import React from 'react';
import Button from "@material-ui/core/Button";


import './feed-add-post.css';

const FeedAddPost = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Что у вас нового, Igor?"
                className="form-control new-post-label"
            />
            <Button
                variant="contained" 
                color="primary"
                type="submit"
                className="btn btn-outline-secondary">
                Опубликовать
            </Button>
        </form>
    )
}

export default FeedAddPost;
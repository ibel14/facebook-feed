import React from 'react';
import Button from "@material-ui/core/Button";


import './feed-add-post.css';

const FeedAddPost = () => {
    return (
    <>
        <div className="add-content-panel">
            <input
                type="text"
                placeholder="Что у вас нового, Igor?"
                className="form-control new-post-label"
            />

            <div className="btn-add">
            <Button
                variant="contained" 
                color="primary"
                type="submit"
                className="btn btn-outline-secondary">
                Прямой эфир
            </Button>
            <Button
                variant="contained" 
                color="primary"
                type="submit"
                className="btn btn-outline-secondary">
                Фото/видео
            </Button>
            <Button
                variant="contained" 
                color="primary"
                type="submit"
                className="btn btn-outline-secondary">
                Чувства/действия
            </Button>
            </div>
        </div>
    </>
    )
}

export default FeedAddPost;
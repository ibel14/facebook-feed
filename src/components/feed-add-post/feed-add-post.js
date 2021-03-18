import React from 'react';
import Button from "@material-ui/core/Button";


import './feed-add-post.css';

const FeedAddPost = () => {
    return (
    <>
        <div className="add-content-panel">

            <div className="top-part">
                <input
                    className="form-control new-post-label"
                    type="text"
                    placeholder="Что у вас нового, Igor?"
                />
                <Button
                    variant="contained" 
                    color="primary"
                    type="submit"
                    className="btn btn-outline-secondary"
                    >
                    Опубликовать
                </Button>
            </div>
        

            <div className="bottom-part">
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
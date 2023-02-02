import React from 'react';
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core';
//import Comments from './Comments';
//import SendIcon from '@mui/icons-material/Send';
import "../style/Post.css";

function Post() {
    return (
        <div className="post">
            <div className="post__header">
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className="post__avatar" src="https://source.unsplash.com/random" alt="User" />
                    </ListItemAvatar>
                    <ListItemText primary="Chandana_virupakshi" secondary="Abu Dhabi, UAE" />
                </ListItem>
                <img
                    className="post__image"
                    src="https://images.unsplash.com/photo-1609220361638-14ceb45e5e1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
                    alt="Post pic"
                />
                <h5 className="post__text"><strong>Chandana_virupakshi: </strong>Baby picture</h5>
                <div className="post__comments">
                   
                </div>
                <form className="post__form">
                    <TextField
                        label="add comment"
                        size="small"
                        variant="outlined"
                        className="post__input"
                        placeholder="add comment"
                    />
                   
                </form>
            </div>
        </div>
    )
}

export default Post

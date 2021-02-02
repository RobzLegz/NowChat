import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import "./Message.css";

const Message = () => {
    return (
        <div className="message">
            <div className="messageAvatar">
                <Avatar />
            </div>
            <div className="message-info">
                <p>username</p>
                <h4>Message</h4>
            </div>
        </div>
    );
}

export default Message;

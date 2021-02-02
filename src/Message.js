import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import "./Message.css";
import useStateValue from './StateProvider';

const Message = () => {

    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className="message">
            <div className="messageAvatar">
                <Avatar src={user?.photoURL} />
            </div>
            <div className="message-info">
                <p>{user?.displayName}</p>
                <h4>Message</h4>
                <small>10:00</small>
            </div>
        </div>
    );
}

export default Message;

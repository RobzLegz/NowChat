import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import "./Message.css";
import useStateValue from './StateProvider';
import * as timeago from 'timeago.js';

const Message = ({messageName, messageText, messageTimestamp}) => {

    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className="message">
            <div className="messageAvatar">
                <Avatar src={user?.photoURL} />
            </div>
            <div className="message-info">
                <p>{messageName}</p>
                <h4>{messageText}</h4>
                <small>{timeago.format(new Date(messageTimestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    );
}

export default Message;

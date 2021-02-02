import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import "./Message.css";
import useStateValue from './StateProvider';
import * as timeago from 'timeago.js';

const Message = ({messageName, messageText, messageTimestamp, messagePhoto}) => {

    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className={`message ${messageName === user.displayName && "messageRecieverMessage"}`}>
            <div className="messageAvatar">
                <Avatar src={messagePhoto} />
            </div>
            <div className={`message-info ${messageName === user.displayName && "messageReciever"}`}>
                <p>{messageName}</p>
                <h3>{messageText}</h3>
                <small>{timeago.format(new Date(messageTimestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    );
}

export default Message;

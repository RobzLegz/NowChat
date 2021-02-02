import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Chat.css";
import Message from './Message';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chatHeader">
                <Avatar />
                <h2>Username</h2>
            </div>
            <div className="chatBody">
                <Message />
            </div>
            <div className="chatFooter">
                <form>
                    <input type="text" placeholder="Message as Username"/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;

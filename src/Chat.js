import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import Message from './Message';
import db from "./firebase";

const Chat = () => {

    const [message, setMessage] = useState("");
    const [avatarSeed, setAvatarSeed] = useState("");

    useEffect(() => {
        setAvatarSeed(Math.floor(Math.random() * 5000));
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage("");
    }

    return (
        <div className="chat">
            <div className="chatHeader">
                <div className="chatHeaderInfo">
                <Avatar className="sidebarChatAvatar" src={`https://avatars.dicebear.com/api/identicon/${avatarSeed}.svg`} />
                    <p>Channel name</p>
                </div>
                <div className="chatHeaderInfo">
                    <Avatar />
                    <h2>Username</h2>
                </div>
            </div>
            <div className="chatBody">
                <Message />
            </div>
            <div className="chatFooter">
                <form>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message as Username"/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;

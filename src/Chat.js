import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./Chat.css";
import Message from './Message';
import db from "./firebase";
import useStateValue from './StateProvider';
import { useParams } from 'react-router-dom';

const Chat = () => {

    const [{user}, dispatch] = useStateValue();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [avatarSeed, setAvatarSeed] = useState("");
    const [channelName, setChannelName] = useState("");
    const {channelId} = useParams();

    const sendMessage = (e) => {
        e.preventDefault();
        setMessage("");
    }

    useEffect(() => {
        setAvatarSeed(Math.floor(Math.random() * 5000));
        if(channelId){
            db.collection("channels").doc(channelId).onSnapshot((snapshot) => (
                setChannelName(snapshot.data().channelName)
            ));
            db.collection("channels").doc(channelId).collection("messages").orderBy("timestamp", "asc").onSnapshot((snapshot) => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ))
        }
    }, [channelId]);

    return (
        <div className="chat">
            <div className="chatHeader">
                <div className="chatHeaderInfo">
                    <Avatar className="sidebarChatAvatar" src={`https://avatars.dicebear.com/api/identicon/${avatarSeed}.svg`} />
                    <p>{channelName}</p>
                </div>
                <div className="chatHeaderInfo">
                    <Avatar src={user?.photoURL} />
                    <div className="userInfo">
                        <h2>{user?.displayName}</h2>
                        <small>{user?.email}</small>
                    </div>
                </div>
            </div>
            <div className="chatBody">
                {messages.map((message) => (
                    <Message key={message.id} id={message.id} messageName={message.name} messageText={message.message} messageTimestamp={message.timestamp} />
                ))}
            </div>
            <div className="chatFooter">
                <form>
                    <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={`Message as ${user.displayName}`}/>
                    <button type="submit" onClick={sendMessage}>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Chat;

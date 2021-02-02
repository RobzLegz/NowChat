import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SidebarChat.css";

const SidebarChat = ({id, name}) => {

    const [avatarSeed, setAvatarSeed] = useState("");

    useEffect(() => {
        setAvatarSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <Link to={`/channels/${id}`}>
            <div className="sidebarChat">
                <Avatar className="sidebarChatAvatar" src={`https://avatars.dicebear.com/api/identicon/${avatarSeed}.svg`} />
                <p>{name}</p>
            </div>
        </Link>
    );
}

export default SidebarChat;

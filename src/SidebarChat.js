import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";

const SidebarChat = () => {

    const [avatarSeed, setAvatarSeed] = useState("");

    useEffect(() => {
        setAvatarSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className="sidebarChat">
            <Avatar className="sidebarChatAvatar" src={`https://avatars.dicebear.com/api/identicon/${avatarSeed}.svg`} />
            <p>ChatName</p>
        </div>
    );
}

export default SidebarChat;

import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import SidebarChat from "./SidebarChat";
import db from "./firebase";
import { Room } from '@material-ui/icons';

const Sidebar = () => {

    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection("channels").onSnapshot((snapshot) => (
            setChannels(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
        ));
    }, []);

    const createChannel = () => {
        const channelName = prompt("Enter a name for a channel");
        if(channelName){
            db.collection("channels").add({
                channelName: channelName,
            });
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>NowChat</h2>
                <AddIcon onClick={createChannel} classname="addChatButton" />
            </div>
            <div className="sidebar-chats">
                {channels.map((channel) => (
                    <SidebarChat key={channel.id} id={channel.id} name={channel.data.channelName} />
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

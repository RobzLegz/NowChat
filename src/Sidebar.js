import React from 'react';
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import SidebarChat from "./SidebarChat";
import db from "./firebase";

const Sidebar = () => {

    const createChannel = () => {
        const channelName = prompt("Enter a name for a channel");
        if(channelName){
            
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h2>NowChat</h2>
                <AddIcon onClick={createChannel} classname="addChatButton" />
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;

import React from 'react';
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import SidebarChat from "./SidebarChat";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <AddIcon />
            </div>
            <div className="sidebar-chats">
                <SidebarChat />
            </div>
        </div>
    );
}

export default Sidebar;

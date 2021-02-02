import React from 'react';
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const NowChat = () => {
    return (
        <div className="app">
          <Sidebar />
          <Chat />
        </div>
    );
}

export default NowChat;

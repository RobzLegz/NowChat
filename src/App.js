import React from 'react';
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;


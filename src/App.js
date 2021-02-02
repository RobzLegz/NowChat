import React from 'react';
import './App.css';
import useStateValue from "./StateProvider";
import Login from "./Login";
import NowChat from './NowChat';

const App = () => {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <NowChat />
      )}
      
    </div>
  );
}

export default App;


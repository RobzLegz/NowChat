import React from 'react';
import './App.css';
import useStateValue from "./StateProvider";
import Login from "./Login";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <BrowserRouter>
            <Sidebar />
            <Switch>
              <Route path="/channels/:channelId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </BrowserRouter>        
        </>
      )}
      
    </div>
  );
}

export default App;


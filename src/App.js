import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './views/Home';
import User from './views/User';

import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/user/:username/:id">
        <User />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;

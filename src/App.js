import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";

import LandingPage from "./Pages/LandingPage/LandingPage";
import Storii from "./Pages/Storii/Storii";
import Alert from "./components/Alert/Alert";
import store from "./store";

const socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");

export default function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Alert />
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/storii" component={Storii} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

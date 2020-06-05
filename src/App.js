import React, { useEffect, useState } from "react";
import StoryContainer from "./components/StoryPage/StoryContainer";
import EntryForm from "./components/StoryPage/EntryForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";

import LandingPage from "./Pages/LandingPage/LandingPage";
import Storii from "./Pages/Storii/Storii";
import Alert from "./components/Alert/Alert";
import store from "./store";

const socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");

export default function App() {
  const [story, updateStory] = useState([]);

  useEffect(() => {
    console.log("HI!");
    console.log(story);
  }, [story]);

  socket.onmessage = (event) => {
    updateStory([...story, event.data]);
  };

  // socket.onopen = () => {
  //   console.log("[open] Connection established");

  // };

  const addEntryToStory = (entry) => {
    //update own state
    // add entry to db
    //listen for any incoming entries
    //if new entry by other writer then show on page.
    socket.send(entry);
  };
  //My name is Nima

  // socket.onclose = function(event) {
  //   if (event.wasClean) {
  //     alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  //   } else {
  //     // e.g. server process killed or network down
  //     // event.code is usually 1006 in this case
  //     alert('[close] Connection died');
  //   }
  // };

  socket.onerror = function (error) {
    alert(`[error] ${error.message}`);
  };

  {
    /* <h1 style={{color: "black"}}>Hello world!</h1>
      <StoryContainer story={story}/>
      <EntryForm onSubmit={(entry) => {addEntryToStory(entry)} }/> */
  }
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

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Provider } from "react-redux";

import Alert from "./components/Alert/Alert";
import store from "./store";
const LandingPage = lazy(() => import("./Pages/LandingPage/LandingPage"));
const Storii = lazy(() => import("./Pages/Storii/Storii"));

export default function App() {
  return (
    <Provider store={store}>
      <div id="app">
        <Alert />
        <Router>
          <Suspense fallback={<div className="container"></div>}>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/storii" component={Storii} />
            </Switch>
          </Suspense>
        </Router>
      </div>
    </Provider>
  );
}

import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import InputFriends from "./components/FriendsMech/InputFriends";
import ListFriends from "./components/FriendsMech/ListFriends";

import Navigation from './components/Navigation';
import LoginPage from "./components/pages/login";
import MainView from"./components/pages/mainView";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
function App() {
  return (
<Router>
<Navigation />
  <Switch>

    <Route exact path="/">
      <MainView></MainView>
    </Route>

    <Route exact path="/login">
    <LoginPage></LoginPage>
    </Route>

  </Switch>
</Router>
  );
}

export default App;

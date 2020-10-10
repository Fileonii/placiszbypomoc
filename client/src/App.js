import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";



import InputFriends from "./components/InputFriends";
import ListFriends from "./components/ListFriends";
function App() {
  return (
    <Fragment>
      <InputFriends></InputFriends>
      <ListFriends />
    </Fragment>
  );
}

export default App;

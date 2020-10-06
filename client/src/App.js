import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

import InputElements from "./components/InputElements";
import ListElements from "./components/ListElements";
function App() {
  return (
    <Fragment>
      <InputElements />
      <ListElements />
    </Fragment>
  );
}

export default App;

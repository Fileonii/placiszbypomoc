import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Title from "./components/title";

import { Route, Router } from "react-router";
import Switch from "react-bootstrap/esm/Switch";



ReactDOM.render(
  <React.StrictMode>

    <Title></Title>
    <App></App>
  
  </React.StrictMode>,
  document.getElementById("root")
);

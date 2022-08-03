import React from "react";
import ReactDOM  from "react-dom"
import "./index.css";
import App from "./App"
import {BrowserRouter} from "react-router-dom"
import Form2 from "./Form2";
ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>
   ,document.getElementById("root"));
   //render means to show
   //ReactDOM.render(what to show,where to show,return type);
   //JSX: JavaScript Extendable or JavaScript and XML
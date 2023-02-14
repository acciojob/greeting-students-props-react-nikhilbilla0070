import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Welcome from "./components/Welcome";



ReactDOM.render(<Welcome name="Hey"/>, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
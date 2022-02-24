import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AppRouter from "./router/AppRouter";

ReactDOM.render(<AppRouter />, document.getElementById("root"));

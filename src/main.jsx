import './fonts.scss'

import React from "react";
import ReactDOM from "react-dom"; // ❗️ Исправлено (React 17 не использует "react-dom/client")
import App from "./App.jsx";
import "./null.scss";

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NearService } from "./services/NearService";
import "./utils/Number";

const nearService = new NearService();
nearService.connect().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

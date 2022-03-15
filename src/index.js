import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { NearService } from "./services/NearService";

const nearService = new NearService();
nearService.connect().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
});

import ReactDOM from "react-dom/client";
import "./index.css";
import { Root } from "./Root";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Root />
  </HashRouter>
);

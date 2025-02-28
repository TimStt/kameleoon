import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "@app/styles/index.scss";

import { AppRouter } from "@app/app-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { makeMockServer } from "./mirage/server";

if (import.meta.env.VITE_USE_MOCK === "true") {
  import("./mirage/server").then(({ makeMockServer }) => {
    makeMockServer();
  });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

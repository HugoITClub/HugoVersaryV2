import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { LanguageProvider } from "./services/language/LanguageProvider";
import configureStore from "./redux/store";
import App from "./App";

// Preparing
const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render to DOM
root.render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

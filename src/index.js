import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { LanguageProvider } from "./services/language/LanguageProvider";
import router from "./router/browserRouter";
import store from "./redux/store";
import { GoogleProvider } from "./services/google/GoogleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GoogleProvider>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </GoogleProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

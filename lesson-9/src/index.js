import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { persistor, store } from './store'
import App from "./components/App/App";
import { PersistGate } from 'redux-persist/integration/react'
import { CircularProgress } from "@material-ui/core";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<CircularProgress />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);

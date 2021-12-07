import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk"
import App from "./containers/App";
import useModels from "@models";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/global.css";

const { useReducers } = useModels()

const store = createStore(
  useReducers(),
  {},
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={store} >
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk"
import App from "@views/containers/App";
import reducers from "@controllers/reducers";
import GlobalStyles from "@styles/GlobalStyles";
import "@styles/global.css";


const store = createStore(
  reducers,
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


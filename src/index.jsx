import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "@containers/App";
import "@styles/global.css";

const init = () => {
  ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
    ,
    document.getElementById("root")
  );
}

init()

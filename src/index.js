import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import { Route } from "react-router-dom";

const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/:filter?" component={App} />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

serviceWorker.unregister();

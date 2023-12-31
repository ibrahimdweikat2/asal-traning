import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import reducer from "./reducer";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const store=createStore(reducer,compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


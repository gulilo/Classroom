import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./Components/App";
import { Provider } from "react-redux";
import store from "./Redax/store";
import { ApiProvider } from "./MockedContext";

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider>
      <App />
    </ApiProvider>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

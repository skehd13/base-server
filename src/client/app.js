// react 관련 라이브러리
import React from "react";
import ReactDOM from "react-dom";
import { Route, Switch } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import reducer from "./reducers";
import SampleApp from "./components/sample";
import HelloApp from "./components/hello";

const history = createBrowserHistory();

const middleware = [routerMiddleware(history), thunk];

const store = createStore(reducer(history), applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={SampleApp} />
        <Route exact path="/hello" component={HelloApp} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);

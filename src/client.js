import React from 'react';
import ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import Routes from 'App/routes';
import AppReducers from 'App/reducers';
require('App/app.scss');

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger');
  middleware = [...middleware, logger];
}

const store = createStore(AppReducers, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app'),
);

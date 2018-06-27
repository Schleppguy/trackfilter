/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Splash from './containers/Splash';
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middlewares =
  process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = composeEnhancers(applyMiddleware(...middlewares))(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <Splash />
  </Provider>,
  document.getElementById('root')
);
// registerServiceWorker();

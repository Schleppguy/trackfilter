/* eslint-disable import/first */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = applyMiddleware(thunk, logger)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

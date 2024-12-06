import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Redux Provider
import './index.css';
import App from './App';
import store from './redux/store'; // Redux store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

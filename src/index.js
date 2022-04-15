import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import './assets/style/root.scss';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store"
import { Provider } from 'react-redux'
ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <Main />
  </BrowserRouter>
  </Provider>,
  document.getElementById('main-container')
);


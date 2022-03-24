import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import './assets/style/root.scss';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('main-container')
);


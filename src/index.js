import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
      <BrowserRouter basename='/signup-login-page-spa'>
            <App />
      </BrowserRouter>,
      document.getElementById('root'),
);

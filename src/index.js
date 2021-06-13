import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import { App } from './App';
// import { UseState } from './UseState';
// import { UseEffect } from './UseEffect';
// import { UseCallback } from './UseCallback';
// import { UseMemoA } from './UseMemoA';
// import { UseRef } from './UseRef';
import { UseContext } from './UseContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UseContext />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppNoJSX from './App-No-JSX';
import './index.css';

// ReactDOM.render(
//   <App greeting={'Welcome to React'} />,
//   document.getElementById('root')
// );

ReactDOM.render(
  React.createElement(AppNoJSX, { greeting: 'Welcome to React' }),
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TimelineContextProvider from './context/timeline';
import AccountContextProvider from './context/account';

ReactDOM.render(
  <React.StrictMode>
    <AccountContextProvider>
      <TimelineContextProvider>
        <App />
      </TimelineContextProvider>
    </AccountContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

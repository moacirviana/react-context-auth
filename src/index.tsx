import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './routes';
// import App from './App';
// import Router from './routes';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

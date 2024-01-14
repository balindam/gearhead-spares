import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider as ReduxProvider} from 'react-redux';
// import dotenv from 'dotenv';

import App from './App.jsx'
// import './index.css'
import store from './redux/store.js';


// immediately invoked function expression
// const envFile = (() => {
//   switch (import.meta.env.VITE_MODE) {
//     case 'production':
//       return '.env.prod';
//     case 'development':
//       return '.env.dev';
//     default:
//       return '.env.local';
//   }
// })();
// dotenv.config({ path: envFile });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
  </React.StrictMode>,
)

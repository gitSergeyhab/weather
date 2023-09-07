import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { App } from './app/app';
import { store } from './store/store';

import 'react-toastify/dist/ReactToastify.css';
import 'normalize.css';
import './css/style.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);


root.render(
  <Provider store={store}>
    <ToastContainer />
    <App />
  </Provider>,
);




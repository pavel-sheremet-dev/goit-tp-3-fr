import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'modern-normalize/modern-normalize.css';
import 'assets/fonts/stylesheet.css';
import 'react-datetime/css/react-datetime.css';
import 'react-toastify/dist/ReactToastify.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import 'helpers/i18next';

import App from './App';
import i18next from 'i18next';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
document.documentElement.lang = i18next.language;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

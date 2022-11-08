import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import CustomToastContainer from './components/CustomToastContainer';
import { store } from './redux';
import GlobalStyles from './styles/global';
import './styles/index.scss';
import baseTheme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={baseTheme}>
          <App />
          <GlobalStyles />
          <CustomToastContainer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

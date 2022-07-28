import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { store } from './redux';

import App from './App';
import Loading from './components/Loading';
import GlobalStyles from './styles/global';
import baseTheme from './styles/theme';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={baseTheme}>
            <App />
            <GlobalStyles />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

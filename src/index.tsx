import Loading from 'components/Loading';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import baseTheme from 'styles/theme';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <ThemeProvider theme={baseTheme}>
          <App />
          <GlobalStyles />
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);

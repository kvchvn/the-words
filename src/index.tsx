import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import baseTheme from 'styles/theme';
import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>
);

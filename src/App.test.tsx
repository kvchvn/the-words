import React, { lazy, Suspense } from 'react';
import '@testing-library/jest-dom';

import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from './redux';
import baseTheme from './styles/theme';

const App = lazy(() => import('./App'));

describe('check App', () => {
  test('check content', async () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <ThemeProvider theme={baseTheme}>
              <Suspense fallback={null}>
                <App />
              </Suspense>
            </ThemeProvider>
          </Provider>
        </MemoryRouter>
      );
    });

    expect(await screen.findByText('the words')).toBeInTheDocument();
    expect(await screen.findByRole('navigation')).toBeInTheDocument();
    expect(await screen.findByRole('main')).toBeInTheDocument();
  });
});

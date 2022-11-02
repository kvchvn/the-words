import '@testing-library/jest-dom';

import React, { lazy, Suspense } from 'react';

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

    const logoTextElements = await screen.findAllByText('the words');
    const navs = await screen.findAllByRole('navigation');

    expect(logoTextElements.length).toBeGreaterThan(0);
    expect(navs.length).toBeGreaterThan(0);
    expect(await screen.findByRole('main')).toBeInTheDocument();
  });
});

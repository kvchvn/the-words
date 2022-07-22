import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout';
import { routerPaths } from './constants';

const MainPage = lazy(() => import('./pages/MainPage'));
const AuthorizationPage = lazy(() => import('./pages/AuthorizationPage'));
const TextbookPage = lazy(() => import('./pages/TextbookPage'));
const SprintGamePage = lazy(() => import('./pages/SprintGamePage'));
const AudioCallGamePage = lazy(() => import('./pages/AudioCallGamePage'));

function App() {
  return (
    <Routes>
      <Route path={routerPaths.main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={routerPaths.authorization} element={<AuthorizationPage />} />
        <Route path={routerPaths.textbook} element={<TextbookPage />} />
        <Route path={routerPaths.sprintGame} element={<SprintGamePage />} />
        <Route path={routerPaths.audioCallGame} element={<AudioCallGamePage />} />
      </Route>
    </Routes>
  );
}

export default App;

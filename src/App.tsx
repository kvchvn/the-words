import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';
import { ROUTER_PATHS } from './constants';
import NotFoundPage from './pages/NotFoundPage';

const MainPage = lazy(() => import('./pages/MainPage'));
const AuthorizationPage = lazy(() => import('./pages/AuthorizationPage'));
const TextbookPage = lazy(() => import('./pages/TextbookPage'));
const SprintGamePage = lazy(() => import('./pages/SprintGamePage'));
const AudioCallGamePage = lazy(() => import('./pages/AudioCallGamePage'));
const GameResultsPage = lazy(() => import('./pages/GameResultsPage'));
const GameWelcomePage = lazy(() => import('./pages/GameWelcomePage'));
const StatisticPage = lazy(() => import('./pages/StatisticPage'));

function App() {
  return (
    <Routes>
      <Route path={ROUTER_PATHS.main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={ROUTER_PATHS.authorization} element={<AuthorizationPage />} />
        <Route path={ROUTER_PATHS.textbook} element={<TextbookPage />} />
        <Route path={ROUTER_PATHS.sprintGame} element={<SprintGamePage />} />
        <Route path={ROUTER_PATHS.audioCallGame} element={<AudioCallGamePage />} />
        <Route path={ROUTER_PATHS.gameResults} element={<GameResultsPage />} />
        <Route path={ROUTER_PATHS.gameWelcome} element={<GameWelcomePage />} />
        <Route path={ROUTER_PATHS.statistic} element={<StatisticPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;

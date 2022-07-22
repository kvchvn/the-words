import Layout from 'components/Layout';
import { routerPaths } from './constants';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import AuthorizationPage from 'pages/AuthorizationPage';
import TextbookPage from 'pages/TextbookPage';
import SprintGamePage from 'pages/SprintGamePage';
import AudiocallGamePage from 'pages/AudiocallGamePage';

function App() {
  return (
    <Routes>
      <Route path={routerPaths.main} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={routerPaths.authorization} element={<AuthorizationPage />} />
        <Route path={routerPaths.textbook} element={<TextbookPage />} />
        <Route path={routerPaths.sprintGame} element={<SprintGamePage />} />
        <Route path={routerPaths.audiocallGame} element={<AudiocallGamePage />} />
      </Route>
    </Routes>
  );
}

export default App;

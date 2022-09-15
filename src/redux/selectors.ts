import { useSelector } from 'react-redux';

import { RootState } from '.';

export const useUserSelector = () => useSelector((state: RootState) => state.user.user);

export const useGroupSelector = () => useSelector((state: RootState) => state.words.group);

export const usePageSelector = () => useSelector((state: RootState) => state.words.page);

export const useWordIdSelector = () => useSelector((state: RootState) => state.words.wordId);

export const useGameDataSelector = () => useSelector((state: RootState) => state.game);

export const useIsGameStartedSelector = () =>
  useSelector((state: RootState) => state.game.isGameStarted);

export const useIsGameOverSelector = () => useSelector((state: RootState) => state.game.isGameOver);

export const useSprintDataSelector = () => useSelector((state: RootState) => state.sprint);

export const useGameResultsSelector = () => useSelector((state: RootState) => state.game.results);

export const useAudioCallDataSelector = () => useSelector((state: RootState) => state.audioCall);

export const useUserStatisticPerGameSelector = () =>
  useSelector((state: RootState) => state.statistic.perGame);

import { RouterPaths } from '../types';

export const STARTED_WORD_INDEX = 0;

export const GAME_TYPES: Pick<RouterPaths, 'sprintGame' | 'audioCallGame'> = {
  sprintGame: 'sprintGame',
  audioCallGame: 'audioCallGame',
};

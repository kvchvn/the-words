import { ThemedStyledProps } from 'styled-components';

export interface Theme {
  fontFamily: {
    primary: string;
  };
  color: {
    blue: string;
    darkblue: string;
    gray: string;
    coral: string;
    orange: string;
  };
  groupColor: {
    '0': string;
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
  };
  difficultyColor: {
    none: string;
    hard: string;
    easy: string;
  };
  size: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  device: {
    mobileM: string;
    mobileL: string;
    tabletM: string;
    tabletL: string;
    laptopS: string;
    laptopM: string;
    laptopL: string;
  };
}

export type ThemeProps<P> = ThemedStyledProps<P, Theme>;

export interface RouterPaths {
  main: string;
  authorization: string;
  textbook: string;
  sprintGame: string;
  audioCallGame: string;
  gameResults: string;
  gameWelcome: string;
  statistic: string;
}

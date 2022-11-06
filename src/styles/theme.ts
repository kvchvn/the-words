import { Theme } from '../types';

const baseTheme: Theme = {
  fontFamily: {
    primary: 'Roboto',
  },
  color: {
    blue: '#286fb4',
    darkblue: '#13436b',
    gray: '#859eb9',
    coral: '#df4c73',
    orange: '#ffa500',
  },
  groupColor: {
    '0': '#9fe7f5',
    '1': '#0193abc3',
    '2': '#429ebd',
    '3': '#004a59',
    '4': '#f6a278',
    '5': '#f16744',
    '6': '#f7ad19',
  },
  difficultyColor: {
    none: '#859eb9',
    hard: '#daa520',
    easy: 'rgba(1,147,171,0.53)',
  },
  size: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '18px',
    xl: '20px',
    xxl: '24px',
  },
  device: {
    mobileM: '320px',
    mobileL: '450px',
    tabletM: '700px',
    tabletL: '1000px',
    laptopS: '1200px',
    laptopM: '1400px',
    laptopL: '1920px',
  },
};

export default baseTheme;

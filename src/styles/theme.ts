import { Theme } from '../types';

const baseTheme: Theme = {
  fontFamily: {
    primary: 'Roboto',
  },
  color: {
    blue: '#286fb4',
    darkblue: '#13436b',
    gray: '#859eb9',
    milk: '#fffff6',
    coral: '#df4c73',
    orange: '#ffa500',
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
    mobileL: '480px',
    tabletM: '800px',
    tabletL: '1000px',
    laptopS: '1200px',
    laptopM: '1400px',
    laptopL: '1920px',
  },
};

export default baseTheme;

import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from '../types';
import { flex } from './templates';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'RoundedMplus1c Regular', 'Jura Regular', sans-serif;

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
      font-size: ${({ theme }: ThemeProps<unknown>) => theme.size.l};
    }

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
      font-size: ${({ theme }: ThemeProps<unknown>) => theme.size.xl};
    }
  }

  #root {
    overflow-x: hidden;
    ${flex({ direction: 'column' })};
  }
`;

export default GlobalStyles;

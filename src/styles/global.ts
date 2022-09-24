import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from '../types';

const GlobalStyles = createGlobalStyle`
  html {
    font-family: 'RoundedMplus1c Regular', 'Jura Regular', sans-serif;
    
    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
      font-size: ${({ theme }: ThemeProps<unknown>) => theme.size.xl};
    }

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM}) {
      font-size: ${({ theme }: ThemeProps<unknown>) => theme.size.xxl};
    }
  }
`;

export default GlobalStyles;

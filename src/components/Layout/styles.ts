import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledMain = styled.main`
  padding: 4rem 0;
  min-height: 100vh;
  transition: opacity 0.5s;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    padding: 8rem 0;
  }
`;

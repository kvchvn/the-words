import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledMain = styled.main`
  padding-top: 4rem;
  padding-bottom: 2rem;
  transition: opacity 0.5s;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    padding-top: 8rem;
  }
`;

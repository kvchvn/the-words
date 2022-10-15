import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledBox = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 25rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    max-width: 60vw;
    width: 70%;
    flex-direction: row;
  }
`;

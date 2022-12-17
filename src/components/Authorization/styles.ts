import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  & > .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
      flex-direction: row;
      gap: 1rem;
      max-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM};
      min-height: 30rem;
    }
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

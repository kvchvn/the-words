import styled from 'styled-components';

import welcome from '../../assets/img/welcome.webp';
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

export const StyledImage = styled.img.attrs({ src: welcome })`
  margin-bottom: 2rem;
  flex-shrink: 0;
  object-fit: fill;
  width: 100%;
  height: 66%;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: 60%;
    margin-bottom: 0;
  }
`;

export const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

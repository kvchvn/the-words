import styled from 'styled-components';

import sound from '../../assets/svg/sound.svg';
import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;

  & > img {
    color: white;
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
  }
`;

export const StyledArticle = styled.article`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  min-height: 18rem;

  & > div {
    padding: 0.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0.5rem;
  }
`;

export const StyledDifficulty = styled.h4`
  color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
  letter-spacing: 2px;
`;

export const StyledAudioButton = styled.button`
  margin: 0 auto;
  width: 3rem;
  height: 3rem;
  background: url(${sound}) white no-repeat 50% 50% / contain;
  background-size: 70% 70%;
  border-radius: 50%;

  &:disabled {
    background-color: lightgray;
  }
`;

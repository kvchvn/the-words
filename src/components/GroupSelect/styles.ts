import styled from 'styled-components';

import { Theme, ThemeProps } from '../../types';

interface StyledButtonProps {
  chosen: boolean;
  groupNum: keyof Theme['groupColor'];
}

export const StyledGroupBox = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const StyledButton = styled.button`
  position: relative;
  padding-left: 0.75rem;
  width: calc(50% - 0.25rem);
  height: 3rem;
  text-align: left;
  opacity: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? '1' : '0.4')};
  transform: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? 'scale(0.95)' : '')};
  background-color: ${({ groupNum, theme }: ThemeProps<StyledButtonProps>) =>
    theme.groupColor[groupNum]};
  border: 1px solid ${({ theme }: ThemeProps<StyledButtonProps>) => theme.color.darkblue};
  border-radius: 0.25rem;
  overflow: hidden;

  &:hover::before {
    transform: scale(1.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: -0.5rem;
    left: -0.5rem;
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    background-color: ${({ theme }: ThemeProps<StyledButtonProps>) => theme.color.milk};
    border-radius: 50%;
    pointer-events: inherit;
    transform: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? 'scale(1.5)' : '')};
    transition: transform 0.25s;
    z-index: -1;
  }
`;

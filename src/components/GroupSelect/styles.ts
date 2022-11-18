import styled from 'styled-components';

import { Theme, ThemeProps } from '../../types';

interface StyledButtonProps {
  chosen: boolean;
  groupNum: keyof Theme['groupColor'];
}

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;

  & > li:last-child:is(:nth-child(2n + 1)) {
    grid-column-end: span 2;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    grid-template-columns: repeat(3, 1fr);

    & > li:last-child:is(:nth-child(2n + 1)) {
      grid-column-end: span 3;
    }
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    gap: 1rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    grid-template-columns: repeat(2, 1fr);

    & > li:last-child:is(:nth-child(2n + 1)) {
      grid-column-end: span 2;
    }
  }
`;

export const StyledButton = styled.button`
  position: relative;
  padding-left: 0.75rem;
  width: 100%;
  min-height: 3rem;
  height: auto;
  opacity: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? '1' : '0.4')};
  transform: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? 'scale(0.95)' : '')};
  background-color: ${({ groupNum, theme }: ThemeProps<StyledButtonProps>) =>
    theme.groupColor[groupNum]};
  border: 1px solid ${({ theme }: ThemeProps<StyledButtonProps>) => theme.color.darkblue};
  border-radius: 0.25rem;
  transition: opacity 0.25s;
  overflow: hidden;

  &:hover {
    opacity: ${({ chosen }: ThemeProps<StyledButtonProps>) => (chosen ? '1' : '0.7')};
  }
`;

import styled from 'styled-components';

import green_check from '../../assets/svg/green_check.svg';
import red_cross from '../../assets/svg/red_cross.svg';
import { ThemeProps } from '../../types';

interface StyledIconProps {
  answer: boolean;
}

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > li {
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 0.5rem;
  }
`;

export const StyledIconsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`;

export const StyledIcon = styled.span`
  width: 1rem;
  height: 1rem;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ answer }: ThemeProps<StyledIconProps>) =>
    answer ? green_check : red_cross});
`;

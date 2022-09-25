import styled, { keyframes } from 'styled-components';

import loading from '../../assets/svg/loading.svg';
import { ThemeProps } from '../../types';

export interface StyledLoadingProps {
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
}

const rotate = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotate(360deg);
    }
`;

export const StyledLoading = styled.span`
  position: relative;
  margin: 0 auto;
  display: block;
  animation: 1.5s ${rotate} 0.25s infinite;
  width: ${({ size }: ThemeProps<StyledLoadingProps>) => {
    switch (size) {
      case 'SMALL':
        return '1.5rem';
      case 'MEDIUM':
        return '3rem';
      case 'LARGE':
        return '5rem';
    }
  }};
  height: ${({ size }: ThemeProps<StyledLoadingProps>) => {
    switch (size) {
      case 'SMALL':
        return '1.5rem';
      case 'MEDIUM':
        return '3rem';
      case 'LARGE':
        return '5rem';
    }
  }};
  background: url(${loading}) no-repeat 50% 50% / contain;
  z-index: 200;
`;

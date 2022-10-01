import styled from 'styled-components';

import black_cross from '../../assets/svg/black_cross.svg';
import { ThemeProps } from '../../types';

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const StyledModal = styled.div`
  position: relative;
  padding: 1rem;
  width: calc(100% - 0.5rem);
  max-width: 20rem;
  min-height: 500px;
  max-height: 90vh;
  overflow: auto;
  z-index: 1000;
  border: 1px solid ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
  border-radius: 1rem;
  background-color: aliceblue;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    max-width: 25rem;
  }
`;

export const StyledButtonClose = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 1.25rem;
  height: 1.25rem;
  background: url(${black_cross}) no-repeat 50% 50% / contain;
`;

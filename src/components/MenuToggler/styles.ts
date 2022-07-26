import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledCheckbox = styled.input.attrs({ type: 'checkbox', id: 'menu' })`
  display: none;

  &:checked ~ header > .wrapper > nav {
    transform: none;
  }

  &:checked ~ main {
    opacity: 0.3;
    pointer-events: none;
    overflow: hidden;
  }

  &:checked ~ label > .burger-line_middle {
    transform: translateX(200px);
  }

  &:checked ~ label > .burger-line_top {
    width: calc(1.3 * 100%);
    transform: translate(-0.25rem, 0.73rem) rotateZ(45deg);
  }

  &:checked ~ label > .burger-line_bottom {
    width: calc(1.3 * 100%);
    transform: translate(-0.25rem, -0.73rem) rotateZ(-45deg);
  }
`;

export const StyledLabel = styled.label.attrs({ htmlFor: 'menu' })`
  padding: 0.5rem;
  position: fixed;
  top: 0.5rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 3rem;
  height: 3rem;
  border: 2px solid white;
  border-radius: 5px;
  overflow: hidden;
  z-index: 301;

  & > .burger-line {
    display: block;
    width: 100%;
    height: 15%;
    border-radius: 4px;
    background: white;
    transition: transform 0.5s, width 0.25s;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    right: 2rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    right: 3rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    right: 4rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    display: none;
  }
`;

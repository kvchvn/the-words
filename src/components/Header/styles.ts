import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../../assets/svg/logo.svg';
import { StyledWrapper } from '../../styles/components';
import { ThemeProps } from '../../types';

interface StyledHeaderProps {
  disabled: boolean;
}

export const StyledHeader = styled.header`
  position: fixed;
  width: 100vw;
  height: 4rem;
  background: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
  z-index: 100;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    padding-bottom: 1rem;
    height: 8rem;
  }

  & a {
    opacity: ${({ disabled }: ThemeProps<StyledHeaderProps>) => (disabled ? '0.5' : '1')};
    pointer-events: ${({ disabled }: ThemeProps<StyledHeaderProps>) =>
      disabled ? 'none' : 'auto'};
    cursor: ${({ disabled }: ThemeProps<StyledHeaderProps>) => (disabled ? 'default' : 'pointer')};
  }
`;

export const StyledHeaderWrapper = styled(StyledWrapper)`
  display: flex;
  flex-direction: column;
`;

export const StyledLogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  background-color: inherit;
  z-index: 15;
`;

export const StyledLogoLink = styled(Link)`
  width: 4rem;
  background: url(${logo}) no-repeat 50% 50% / contain;
`;

export const StyledHeaderTitle = styled.h2`
  position: relative;
  line-height: 4rem;
  font-family: 'Pacifico Regular', 'Jura Regular', sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${({ theme }: ThemeProps<unknown>) => theme.color.milk};
  letter-spacing: 3px;
  background: inherit;

  @media (max-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  padding: 1.5rem;
  position: absolute;
  top: 4rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  font-size: 1.2rem;
  background: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
  transform: translateY(-100vh);
  transition: transform 0.5s;
  z-index: 5;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    font-size: ${({ theme }: ThemeProps<unknown>) => theme.size.m};
    padding: 0;
    position: static;
    transform: none;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;
  }

  & > a {
    padding: 0.5rem 1rem;
    width: 70%;
    min-width: 200px;
    max-width: 300px;
    color: ${({ theme }: ThemeProps<unknown>) => theme.color.milk};
    letter-spacing: 1px;
    border-radius: 0.25rem;
    text-align: center;

    &.active-link {
      color: ${({ theme }: ThemeProps<unknown>) => theme.color.orange};
    }

    @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
      padding: 0.5rem 0.75rem;
      min-width: auto;
      max-width: none;
      width: auto;
    }
  }

  & > a:last-child {
    background: rgba(245, 245, 220, 0.3);
  }

  & > a:hover {
    background: rgba(255, 228, 196, 0.5);
  }
`;

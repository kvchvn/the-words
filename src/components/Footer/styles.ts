import styled, { css } from 'styled-components';

import github from '../../assets/svg/github.svg';
import linkedin from '../../assets/svg/linkedin.svg';
import logo from '../../assets/svg/logo.svg';
import rss from '../../assets/svg/rss.svg';
import { flex } from '../../styles/templates';
import { ThemeProps } from '../../types';

export const StyledFooter = styled.footer`
  padding: 1rem 0;
  background-color: black;

  & > .wrapper {
    ${flex({
      direction: 'column',
      gap: '1.5rem',
    })};

    @media (min-width: ${({ theme }: ThemeProps<unknown>) =>
        theme.device.tabletM}) and (max-width: ${({ theme }: ThemeProps<unknown>) =>
        theme.device.laptopS}) {
      ${flex({ direction: 'row', justify: 'space-between' })};

      & > * {
        width: 30%;
      }
    }
  }
`;

export const StyledSection = styled.section`
  ${flex({ justify: 'center', align: 'center', gap: '2rem' })};
  flex-shrink: 0;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.tabletM}) and (max-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.laptopS}) {
    ${flex({ direction: 'column', gap: '1rem' })};
    order: 1;
  }

  & > p {
    color: white;
  }

  & > span {
    width: 1.5rem;
    height: 1.5rem;
    background: url(${logo}) no-repeat 50% 50% / contain;

    @media (min-width: ${({ theme }: ThemeProps<unknown>) =>
        theme.device.tabletM}) and (max-width: ${({ theme }: ThemeProps<unknown>) =>
        theme.device.laptopS}) {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;

const socialLinkStyle = (backgroundImage: string) => css`
  padding: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: url(${backgroundImage}) no-repeat 50% 50% / 60%;
  border-radius: 50%;

  &:hover {
    background-color: #80808099;
  }
`;

export const StyledSocialBox = styled.div`
  ${flex({
    justify: 'center',
    align: 'center',
    gap: '2rem',
  })};

  @media (min-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.tabletM}) and (max-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.laptopS}) {
    ${flex({ direction: 'column', align: 'flex-start' })};
    order: 0;
  }
`;

export const StyledGithubLink = styled.a.attrs({ target: '_blank' })`
  ${socialLinkStyle(github)}
`;

export const StyledLinkedinLink = styled.a.attrs({ target: '_blank' })`
  ${socialLinkStyle(linkedin)}
`;

export const StyledRssLink = styled.a.attrs({ target: '_blank' })`
  ${socialLinkStyle(rss)}
  background-size: 70%;
`;

export const StyledNav = styled.nav`
  ${flex({ direction: 'column', align: 'center', gap: '0.5rem' })}
  margin: 0 auto;
  padding: 1.5rem;
  width: 40%;
  text-align: right;
  font-size: 0.8rem;
  color: white;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.tabletM}) and (max-width: ${({ theme }: ThemeProps<unknown>) =>
      theme.device.laptopS}) {
    padding: 0;
    margin: 0;
    align-items: flex-end;
    border: none;
    order: 2;
    font-size: 1rem;
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    ${flex({ direction: 'row', justify: 'center', align: 'center', gap: '2rem' })}
  }

  & > .active-link {
    color: ${({ theme }: ThemeProps<unknown>) => theme.color.orange};
  }
`;

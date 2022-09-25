import styled from 'styled-components';

import { ThemeProps } from '../../types';

const StyledWrapper = styled.div.attrs({ className: 'wrapper' })`
  margin: 0 auto;
  width: calc(100vw - 2rem);
  max-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM};
  height: 100%;
  background: inherit;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.mobileL}) {
    width: calc(100vw - 4rem);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletM}) {
    width: calc(100vw - 6rem);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    width: calc(100vw - 8rem);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopS}) {
    width: calc(100vw - 10rem);
  }

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.laptopM}) {
    width: calc(100vw - 12rem);
  }
`;

export default StyledWrapper;

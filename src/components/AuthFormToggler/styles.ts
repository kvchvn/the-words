import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledToggler = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3rem;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    margin-top: 0;
  }

  & > input {
    display: none;
  }

  & > input:checked + label {
    pointer-events: none;
    border-bottom: 3px solid ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
  }

  & > label {
    display: block;
    width: 50%;
    line-height: 3rem;
    text-align: center;
    border-bottom: 3px solid lightgray;

    &:first-of-type {
      border-right: 1px solid lightgray;
    }
  }
`;

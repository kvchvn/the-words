import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledForm = styled.form`
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: rgba(211, 211, 211, 0.5);

  & > div {
    position: relative;
    width: 80%;
  }

  & > div > span {
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    font-size: 0.65rem;
    color: darkred;
  }

  & > div > input {
    padding: 0 1rem;
    width: 100%;
    height: 2.5rem;
    border: 2px solid ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
    border-radius: 0.25rem;
    transition: box-shadow 0.2s;

    &:focus {
      outline: none;
      border: 2px solid ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
      box-shadow: 2px 2px 3px black;
    }
  }

  & > button {
    padding: 0.5rem 1rem;
    min-width: 11rem;
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.coral};
    color: white;
    border-radius: 0.25rem;
  }
`;

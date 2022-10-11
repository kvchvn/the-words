import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 25rem;
  text-align: center;
  background-color: lightblue;
  border-radius: 1rem;

  & > article {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  justify-content: center;

  & > ul {
    width: 50%;

    & > li {
      cursor: pointer;
    }
  }

  & > ul:first-child {
    padding-right: 1rem;
    text-align: right;
    border-right: 1px solid gray;
  }

  & > ul:last-child {
    padding-left: 1rem;
    text-align: left;
  }
`;

export const StyledButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > button {
    padding: 0.5rem 1rem;
    width: 70%;
    border-radius: 0.25rem;
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
    color: white;
  }
`;

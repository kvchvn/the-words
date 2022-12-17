import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledPageBox = styled.article`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;

  & > button,
  & > span {
    width: 2.5rem;
    height: 2.5rem;
    line-height: 2.5rem;
    border-radius: 50%;
    font-weight: 700;
    color: white;
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.blue};
    transition: box-shadow 0.25s;
  }

  & > button:hover {
    box-shadow: 2px 2px 2px black;
  }

  & > button:disabled {
    opacity: 0.5;
    cursor: default;
    box-shadow: none;
  }

  & > span {
    text-align: center;
    background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.coral};
    cursor: default;
  }
`;

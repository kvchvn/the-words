import styled from 'styled-components';

import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  & > .wrapper {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 30rem;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & > button {
    padding-bottom: 0.25rem;
    background: inherit;
    border-bottom: 1px solid black;
  }
`;

export const StyledButton = styled.button`
  margin: 0 auto;
  padding: 1rem 1.5rem;
  width: 15rem;
  border-radius: 0.5rem;
  color: white;
  background-color: ${({ theme }: ThemeProps<unknown>) => theme.color.darkblue};
`;

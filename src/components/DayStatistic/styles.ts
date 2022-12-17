import styled from 'styled-components';

import calendar from '../../assets/svg/calendar.svg';
import { flex } from '../../styles/templates';
import { ThemeProps } from '../../types';

export const StyledSection = styled.section`
  ${flex({ direction: 'column', align: 'center', gap: '2rem' })}
`;

export const StyledSubtitleBox = styled.div`
  ${flex({ direction: 'column', align: 'center' })};

  & > p {
    margin-top: 1rem;
  }
`;

export const StyledToday = styled.h4`
  ${flex({ align: 'center', gap: '0.5rem' })};

  &::before {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background: url(${calendar}) no-repeat 50% 50% / contain;
  }
`;

export const StyledContainer = styled.div`
  ${flex({ direction: 'column', align: 'center', gap: '2rem' })};
  width: 100%;

  @media (min-width: ${({ theme }: ThemeProps<unknown>) => theme.device.tabletL}) {
    flex-direction: row;
  }
`;

export const StyledBox = styled.article`
  ${flex({ direction: 'column', align: 'center', gap: '1rem' })};
  width: 100%;
  padding: 3rem;
  text-align: center;
  border-radius: 0.5rem;

  & > h4 {
    padding-bottom: 0.5rem;
    width: 80%;
    border-bottom: 1px solid gray;
  }
`;

export const StyledSprintBox = styled(StyledBox)`
  background: linear-gradient(rgba(143, 188, 143, 0.5), white);
`;

export const StyledAudiocallBox = styled(StyledBox)`
  background: linear-gradient(rgba(100, 149, 237, 0.5), white);
`;

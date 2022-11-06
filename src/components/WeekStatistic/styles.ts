import styled from 'styled-components';

import calendar from '../../assets/svg/calendar.svg';
import { flex } from '../../styles/templates';

export const StyledSection = styled.section`
  margin: 5rem auto 0 auto;
  ${flex({ direction: 'column', justify: 'center', align: 'center', gap: '2rem' })};
  max-width: 40rem;
`;

export const StyledSubtitleBox = styled.div`
  ${flex({ direction: 'column', align: 'center' })};

  & > p {
    margin-top: 1rem;
  }
`;

export const StyledDateRange = styled.h4`
  ${flex({ align: 'center', gap: '0.5rem' })};

  &::before {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    background: url(${calendar}) no-repeat 50% 50% / contain;
  }
`;

export const StyledChartBox = styled.article`
  ${flex({ direction: 'column', align: 'center', justify: 'center' })}
  margin: 1rem auto;
  width: 100%;
`;

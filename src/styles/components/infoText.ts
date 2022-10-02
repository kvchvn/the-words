import styled from 'styled-components';

import exclamation from '../../assets/svg/exclamation.svg';

const InfoText = styled.p`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  background-color: #f3f3f3;

  &::before {
    content: '';
    display: block;
    min-width: 30px;
    height: 30px;
    background: url(${exclamation}) no-repeat 50% 50% / contain;
  }
`;

export default InfoText;

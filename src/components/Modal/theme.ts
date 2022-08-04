import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const StyledModal = styled.article`
  position: relative;
  width: 400px;
  height: 400px;
  border: 2px solid black;
  z-index: 100;
  background-color: lightgray;
`;

import styled from 'styled-components';

export const Backdrop = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 20;

  & .iconBackBtn {
    position: absolute;
    margin: 0;
    top: -10px;
    left: 10px;
    width: 40px;
  }
`;

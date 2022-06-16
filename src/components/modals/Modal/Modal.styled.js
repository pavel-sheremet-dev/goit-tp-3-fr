import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';

export const WrapperOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.modalBackground};
  z-index: 10;
`;
export const WrapperModal = styled(StyledContainer)`
  background-color: ${({ theme }) => theme.colors.white};
`;

import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';

export const StyledContainerHeader = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 17px;
  box-shadow: ${({ theme }) => theme.shadows.header};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    justify-content: space-between;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

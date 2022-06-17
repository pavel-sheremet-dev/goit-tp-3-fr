import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  border-bottom: 1px solid #efeeee;

  position: relative;
  margin: 0 auto;

  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${({ theme }) => theme.breakPoints.desktop};
  }
`;

export const StyledContainerHeader = styled(StyledContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 17px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    justify-content: space-between;
  }
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

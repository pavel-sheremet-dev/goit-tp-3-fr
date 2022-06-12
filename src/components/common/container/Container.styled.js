import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 20px;
  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
    padding: 32px 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 40px 16px;
    width: ${({ theme }) => theme.breakPoints.desktop};
  }
`;

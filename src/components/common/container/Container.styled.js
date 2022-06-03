import styled from 'styled-components';

export const StyledContainer = styled.div`
  outline: 1px solid green;
  position: relative;
  margin: 0 auto;
  padding: 0 20px;
  width: 100vw;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: ${({ theme }) => theme.breakPoints.mobile};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: ${({ theme }) => theme.breakPoints.tablet};
    padding: 0 32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 0 16px;
    width: ${({ theme }) => theme.breakPoints.desktop};
  }
`;

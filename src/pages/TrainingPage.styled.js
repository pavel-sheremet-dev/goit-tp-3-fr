import styled from 'styled-components';

export const StyledCountdownContainer = styled.div`
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: -32px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-right: -74px;
  }
`;

import styled from 'styled-components';

export const StyledCountdownContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: -32px;
    margin-bottom: 36px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-bottom: 44px;
    margin-right: 230px;
  }
`;

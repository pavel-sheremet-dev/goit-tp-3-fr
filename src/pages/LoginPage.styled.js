import styled from 'styled-components';

export const StyledLoginPage = styled.section`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: flex;
    margin: 0 auto;
    width: ${({ theme }) => theme.breakPoints.desktop};
  }
`;

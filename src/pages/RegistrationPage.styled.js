import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: flex;
  }
`;

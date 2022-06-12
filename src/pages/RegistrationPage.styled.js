import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 768px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: row;
    width: 1280px;
  }
`;

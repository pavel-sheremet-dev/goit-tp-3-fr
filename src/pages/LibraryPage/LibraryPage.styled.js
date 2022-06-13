import styled from 'styled-components';

export const LibFormLogicPosition = styled.div`
  padding: 0 0 80px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0 0 40px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 0 0 40px 0;
  }
`;

export const LibCollectionLogicPosition = styled.div`
  & > div {
    padding: 0 0 20px 0;
  }

  & > div:last-child {
    padding: 0 0 30px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

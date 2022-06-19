import styled from 'styled-components';

export const WrapperNotActiveTrain = styled.div`
  & .iconPlus {
    width: 52px;
    height: 52px;
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    border-radius: 50%;
    margin: 0 auto;
  }
`;

export const WrapperDesktop = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    display: flex;
  }
`;
export const ResultsWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background1};
  box-shadow: ${({ theme }) => theme.shadows.dashboard};
  padding: 20px;
  margin-top: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 0;
    height: 340px;
  }
`;

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

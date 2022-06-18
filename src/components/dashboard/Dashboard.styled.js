import styled from 'styled-components';

export const DashBox = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  padding: 20px 10px 20px 10px;
  box-shadow: ${({ theme }) => theme.shadows.dashboard};
  background-color: ${({ theme }) => theme.colors.dashboardBackColor};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 30px 37px 30px 37px;
    height: 340px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 928px;
    padding: 30px 77px 32px 40px;
    margin-right: 32px;
  }

  & p {
    padding-left: 10px;
  }

  & p,
  .x-axes-label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
  }

  & .x-axes-label {
    margin-top: -8px;
    text-align: right;
    margin-right: 10px;
  }

  & span {
    display: inline-block;
    font-weight: 600;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.iconsHover};
    margin-left: 8px;
  }
`;

export const ChartContainer = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  margin-top: -8px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 255px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.destop}) {
    height: 215px;
  }
`;

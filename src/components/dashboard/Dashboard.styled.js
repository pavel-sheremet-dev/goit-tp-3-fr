import styled from 'styled-components';

export const DashBox = styled.div`
  /* width: 100%; */
  padding: 20px 22px 40px 25px;
  box-shadow: ${({ theme }) => theme.shadows.dashboard};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 30px 50px 50px 50px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 928px;
    padding: 30px 77px 32px 40px;
  }

  & p,
  .x-axes-label {
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 500;
  }

  & span {
    display: inline-block;
    font-weight: 600;
    padding: 5px;
    background-color: ${({ theme }) => theme.colors.iconsHover};
    margin-left: 8px;
  }

  & .x-axes-label {
    text-align: right;
    margin-right: 10px;
  }
`;

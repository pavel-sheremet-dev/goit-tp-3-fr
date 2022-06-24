import styled from 'styled-components';

export const AdvSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background1};

  & h1 {
    margin-bottom: 32px;
    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 1.12;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      margin-bottom: 48px;
    }
  }

  & p {
    margin-bottom: 14px;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.9;
  }
`;

export const AdvList = styled.ul`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};

  &:not(:last-of-type) {
    margin-bottom: 24px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      margin-bottom: 32px;
    }
  }

  &:last-of-type {
    margin-bottom: 60px;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      margin-bottom: 0;
    }
  }

  & li {
    display: flex;
    align-items: baseline;
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }

  & span {
    height: 9px;
    margin-right: 12px;
  }
`;

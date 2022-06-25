import styled from 'styled-components';

export const AuthorQuoteSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background1};

  & span {
    display: block;
    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    font-size: 59px;
    line-height: 1;
    color: ${({ theme }) => theme.colors.mainBrandColor};
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 69px;
    }
  }

  & .text {
    margin-top: -25px;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 1.23;
    text-align: center;

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 24px;
      line-height: 1.58;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
      font-size: 24px;
      line-height: 1.67;
    }
  }

  & .hr {
    margin: 16px auto 12px auto;
    width: 100px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightText};

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      width: 150px;
      margin: 20px auto 12px auto;
    }
  }

  & .author {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
    text-align: center;
    color: ${({ theme }) => theme.colors.lightText};

    @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
      font-size: 20px;
      line-height: 1.2;
    }
  }
`;

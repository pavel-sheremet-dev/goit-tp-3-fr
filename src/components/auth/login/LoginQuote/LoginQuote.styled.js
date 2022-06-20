import styled from 'styled-components';

export const SectionQuote = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 64px;
    padding-bottom: 71px;
  }
`;

export const StyledQuote = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 16px;
  margin: 0 auto;
  width: 229px;

  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.23;
  text-align: center;
  color: ${({ theme }) => theme.colors.defaultFont};

  :after {
    content: '';
    display: block;
    width: 100px;
    height: 1px;
    margin: 0 auto;
    margin-top: 16px;
    background-color: ${({ theme }) => theme.colors.after};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-bottom: 20px;
    width: 526px;
    font-size: 24px;
    line-height: 1.58;
    :after {
      width: 150px;
      margin-top: 20px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding-left: 0;
    padding-right: 0;
    margin: 0 auto;
    width: 397px;
  }
`;

export const StyledIcon = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 33px;
    height: 27px;
    margin-bottom: 14px;
  }
`;

export const StyledTitle = styled.span`
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
  color: ${({ theme }) => theme.colors.lightText};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

import styled from 'styled-components';
import SmallLine from 'images/svg/smLine.svg';
import LargeLine from 'images/svg/lgLine.svg';

export const Title = styled.h2`
  display: flex;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.2;
  justify-content: center;
  align-items: center;
  margin: 4px;

  &::before,
  ::after {
    content: url(${SmallLine});
    margin-top: -5px;
    margin-left: 4px;
    margin-right: 4px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    justify-content: start;
    align-items: start;
    font-size: 14px;
    margin: 7px;
    margin-left: 0%;
    &::before {
      content: none;
    }
    &::after {
      content: url(${LargeLine});
      margin-top: -5px;
      margin-left: 8px;
      margin-right: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: 12px;
    &::before,
    ::after {
      content: url(${SmallLine});
      margin-top: -5px;
      margin-left: 4px;
      margin-right: 4px;
    }
  }
`;

export const List = styled.ul`
  width: 240px;
  height: 115px;
  margin: 0 auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.2;
`;

export const Date = styled.span`
  width: 75px;
  color: ${({ theme }) => theme.colors.defaultFont};
  text-align: center;
`;

export const Time = styled.span`
  width: 65px;
  color: ${({ theme }) => theme.colors.lightText};
  text-align: center;
`;

export const Page = styled.span`
  display: inline-block;
  margin-right: 5px;
  min-width: 24px;
  text-align: end;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

export const PagesName = styled.span`
  width: 65px;
  color: ${({ theme }) => theme.colors.lightText};
`;

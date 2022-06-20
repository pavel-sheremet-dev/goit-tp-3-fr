import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';
import { ReactComponent as ExampleIcon } from 'assets/images/svg/example-svg.svg';
import { getTypeKeys } from 'helpers/libraryService';

export const PositionContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.defaultFont};

  margin: 0 0 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const TitleList = styled.ul`
  display: flex;
  position: relative;
  margin: 0 0 10px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const TitleListCategory = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.lightText};

  position: ${props => props.position || 'absolute'};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    right: ${props => props.tablet || null};
    left: ${props => props.lefttablet || null};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    right: ${props => props.desktop || null};
    left: ${props => props.leftdesktop || null};
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const ListCategory = styled.li`
  &:not(:last-child) {
    margin: 0 0 16px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    &:not(:last-child) {
      margin: 0 0 8px 0;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};

  padding: 25px 20px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
    padding: 10px 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 10px 80px 10px 20px;
  }
`;

export const BoxPreview = styled.div`
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BoxContent = styled.div`
  margin: ${props => props.margin || '0'};
  width: 100%;

  & > span:first-child {
    margin: 0 0 14px 0;
    display: block;
  }

  & li:not(:last-child) {
    margin: 0 0 12px 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BookNameOutput = styled(EllipsisText)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.defaultFont};

  word-break: break-all;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    line-height: 17px;
    margin: ${props => props.margin || '0'};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 0;
  }
`;

export const BookAuthorOutputValid = styled(EllipsisText)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.defaultFont};

  position: absolute;
  left: 80px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    line-height: 17px;
    position: inherit;
    left: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BookContentOutput = styled.span`
  position: absolute;
  left: 80px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.defaultFont};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    position: inherit;
    left: 0;
    font-size: 14px;
    line-height: 17px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const ListBookCategory = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    position: relative;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BookCategoryOutput = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.lightText};

  position: relative;

  display: ${props => props.display || 'block'};
  align-items: ${props => props.align || 'inherit'};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    align-items: center;
    width: ${props => props.tablet || 'auto'};
    font-size: 14px;
    line-height: 17px;
    color: ${({ theme }) => theme.colors.defaultFont};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${props => props.desktop || 'auto'};
  }
`;

export const BookCategoryOutputPos = styled.span`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: ${props => props.margin || null};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BoxIcon = styled.span`
  margin: 0 12px 0 0;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 10px 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BookIcon = styled(ExampleIcon)`
  fill: ${props =>
    props.fill === getTypeKeys().ReadingBooks
      ? ({ theme }) => theme.colors.mainBrandColor
      : ({ theme }) => theme.colors.placeholder};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.reviewBtn};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  transition: ${({ theme }) => theme.transition('background-color')};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
  }

  padding: 10px 34px;
  margin: 0 auto;
  cursor: pointer;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0;
    padding: 10px;
    margin: 0 0 0 auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 10px 34px;
  }
`;

export const RatingContainer = styled.span`
  display: flex;
  position: absolute;
  left: 80px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    position: inherit;
    left: 0;
    margin: 0 0 0 auto;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

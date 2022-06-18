import styled from 'styled-components';
import { ReactComponent as Star } from 'images/svg/star-full.svg';
import { ReactComponent as Example } from 'images/svg/example-svg.svg';
import { getTypeKeys } from 'helpers/libraryService';

export const PosContainer = styled.div`
  width: 280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    margin: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const CollectionBox = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const LibraryBox = styled.div`
  padding: 23px 26px;
  margin: 0 0 15px 0;
  &.nonreview {
    padding: 23px 26px 0px 26px;
  }
  &:last-child {
    margin: 0;
  }
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 10px 20px;
    margin: 0 0 8px 0;
    justify-content: start;
    display: flex;
    &.nonreview {
      padding: 10px 20px;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 10px 80px 10px 20px;
    &.nonreview {
      padding: 10px 80px 10px 20px;
    }
    position: relative;
  }
`;

export const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.defaultFont};
  padding: 0 0 20px 0;
`;

export const BookTitle = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.defaultFont};
  margin: 0 0 12px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    line-height: 17px;

    width: ${props =>
      props.type === getTypeKeys().FinishedBooks ? props.width : props.wid};
    height: ${props => (props.length > props.string ? props.height : 'auto')};
    margin: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
  }
`;

export const BookText = styled.li`
  display: flex;
  position: relative;
  padding: 0 0 12px 0;
  &:last-child {
    padding: 0 0 24px 0;
  }

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.color || (({ theme }) => theme.colors.placeholder)};
  height: ${props => (props.length > props.string ? '42px' : 'auto')};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    align-items: center;
    padding: 0;
    &:last-child {
      padding: 0;
    }
    font-size: 14px;
    line-height: 17px;

    margin: ${props =>
      props.fn === getTypeKeys().FinishedBooks ? props.margin : props.more};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    position: unset;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    margin: ${props => props.margin || '0'};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const BooksTextSentence = styled.span`
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const BooksGetContent = styled.p`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.size || '12px'};
  line-height: ${props => props.height || '15px'};
  color: ${({ theme }) => theme.colors.defaultFont};
  left: ${props => props.left || null};
  width: ${props => props.width || 'auto'};
  height: ${props => (props.length > props.string ? '42px' : 'auto')};
  position: absolute;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: ${props => props.width || 'auto'};
  }
`;

export const StarContainer = styled.span`
  display: flex;
  left: ${props => props.left || null};
  position: absolute;
`;

export const StarIcon = styled(Star)`
  margin: 0 3px 0 0;
  &:last-child {
    margin: 0;
  }
`;

export const ContentBox = styled.div`
  display: flex;
  width: 330px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 610px;
  }
`;

export const BookIcon = styled.span`
  margin: 0 10px 0 0;
  width: 22px;
  height: ${props => props.height || '100%'};
  fill: ${props =>
    props.fill === 'InActionBooks'
      ? ({ theme }) => theme.colors.mainBrandColor
      : ({ theme }) => theme.colors.placeholder};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0 18px 0 0;
    align-items: center;
    display: flex;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const Book = styled(Example)`
  width: 22px;
  fill: ${props =>
    props.fill === getTypeKeys().ReadingBooks
      ? ({ theme }) => theme.colors.mainBrandColor
      : ({ theme }) => theme.colors.placeholder};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
  }
`;

export const FlexTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
    align-items: ${props => (props.length < props.string ? 'center' : null)};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    align-items: center;
  }
`;

export const Button = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 10px 35px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.reviewBtn};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    color: ${({ theme }) => theme.colors.buttonText};
    background: ${({ theme }) => theme.colors.mainBrandColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0 0 0 auto;
    padding: 10px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding: 10px 35px;
  }
`;

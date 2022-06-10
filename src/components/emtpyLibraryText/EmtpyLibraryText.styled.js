import { StyledContainer } from 'components/common/container/Container.styled';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from 'images/svg/arrow.svg';
import { ReactComponent as BookIc } from 'images/svg/icon-book.svg';
import { ReactComponent as FlagIc } from 'images/svg/flag.svg';

export const BookIcon = styled(BookIc)`
  display: inline;
`;
export const FlagIcon = styled(FlagIc)`
  display: inline;
`;

export const ArrowSvg = styled(ArrowIcon)`
  display: inline;
  position: relative;
  top: 8px;
`;
export const StyledList = styled.ul`
  margin-bottom: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 0px;
  }
`;
export const StyledItem = styled.li`
  margin-top: ${props => props.marginTop};
`;
export const StyledWrap = styled.br``;
export const StyledStepText = styled.p`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 19px;
    margin-bottom: 16px;
    margin-top: ${props => props.marTopTablet};
  }
`;
export const StyledCreateText = styled.span`
  margin-left: 15px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 16px;
    margin-left: 12px;
  }
`;
export const StyledDescriptionText = styled.span`
  position: relative;
  top: 8px;
  margin-left: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};
`;
export const StyledNameBook = styled.p`
  position: absolute;
  top: 27px;
  left: 24px;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const StyledLibraryBox = styled(StyledContainer)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const StyledLibButton = styled.button`
  height: 40px;
  min-width: 127px;
  padding: 0;
  font-size: 14px;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('outline-color')};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }
`;

export const StyledLibBox = styled.div`
  text-align: center;
`;
export const StyledEmptyLibBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.header};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 0px;
    padding: 40px;
    width: 608px;
    height: 272px;
  }
`;

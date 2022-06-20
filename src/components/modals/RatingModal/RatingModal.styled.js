import styled from 'styled-components';
import { ReactComponent as StarEmptyIcon } from 'assets/images/svg/star-empty.svg';
import { ReactComponent as StarFullIcon } from 'assets/images/svg/star-full.svg';

export const StyledRatingBox = styled.div`
  width: 100%;
  max-width: 280px;
  max-height: 395px;
  padding: 20px 20px 40px;
  background-color: ${({ theme }) => theme.colors.background1};
  box-shadow: ${({ theme }) => theme.shadows.ratingModal};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    max-width: 608px;
    max-height: 399px;
  }
`;

export const StyledRatingText = styled.p`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 20px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 12px;
  }
`;
export const StyledRatingResumeText = styled.span`
  font-size: 16px;
  line-height: 1.25;
`;
export const StyledRatingForm = styled.form``;
export const StyledRatingTextArea = styled.textarea`
  display: block;
  margin-bottom: 20px;
  margin-top: 8px;
  padding: 8px;
  resize: none;
  width: 100%;
  height: 170px;
  border: 1px solid ${({ theme }) => theme.colors.placeholder};
  border-radius: 4px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    height: 170px;
    margin-bottom: 28px;
    margin-top: 12px;
  }
`;

export const StyledRatingButtonSave = styled.button`
  height: 40px;
  min-width: 98px;
  padding: 0;
  margin-right: ${props => props.marginRight || '0px'};
  font-size: 14px;
  line-height: 1.21;
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
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBtn};
    outline: ${({ theme }) => theme.colors.disabledBtn};
    color: ${({ theme }) => theme.colors.buttonText};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    min-width: 130px;
  }
`;
export const StyledRatingLabel = styled.label`
  position: relative;
  display: block;
  width: 100%;
  margin-top: 20px;
`;

export const StyledRatingButtonBack = styled(StyledRatingButtonSave).attrs(
  props => ({
    type: 'button',
  }),
)``;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SvgEmptyStar = styled(StarEmptyIcon)`
  display: inline;
`;

export const SvgFullStar = styled(StarFullIcon)`
  display: inline;
`;

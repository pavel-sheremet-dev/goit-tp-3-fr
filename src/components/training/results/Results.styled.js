import styled from 'styled-components';
import { Input, Button } from '../../library/libraryForm/LibraryForm.styled';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    align-items: center;
    justify-content: center;
    margin-left: 40px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    justify-content: space-between;
    align-items: center;
    margin-left: 0;
  }
  & .datetime .rdtPicker {
    background: ${({ theme }) => theme.colors.background1};
    margin-top: 5px;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.21;
  margin-bottom: 12px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-size: 14px;
    margin-bottom: 27px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    font-size: 12px;
    align-items: center;
    margin-bottom: 12px;
  }
`;

export const InputDate = styled(Input)`
  width: 110px;
  font-size: 13px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.defaultFont};
`;

export const Label = styled.label`
  width: 110px;
  position: relative;
  display: flex;
  white-space: nowrap;
  flex-direction: column;
  min-height: 42px;
  color: ${({ theme }) => theme.colors.lightText};
  & span {
    font-size: 11px;
    line-height: 1.2;
    margin-bottom: 4px;
  }
  & input:hover + button {
    background-color: ${({ theme }) => theme.colors.background1};
  }
  & .icon {
    position: absolute;
    top: 65%;
    right: 0;
    margin-top: 0;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.lightBackground};
    transform: translateY(-50%);
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-right: 20px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-right: 0;
  }
`;

export const ButtonDate = styled(Button)`
  width: 240px;
  margin-top: 28px;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledBtn};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 0;
    margin-top: 17px;
    margin-left: 12px;
    margin-right: 0;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-top: 28px;
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 24px;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 240px;
  }
`;

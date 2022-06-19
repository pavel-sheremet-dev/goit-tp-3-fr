import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 25px;
  margin-bottom: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 28px;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    justify-content: start;
    width: 928px;
    margin-top: 0;
    margin-right: 32px;
  }
`;

export const Title = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  min-height: 60px;
  margin-bottom: 20px;

  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.disabledBtn};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    margin-bottom: 28px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-bottom: 24px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
    padding-bottom: 0;
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  & .rdt .rdtPicker {
    background: ${({ theme }) => theme.colors.background1};
    margin-top: 5px;
  }

  &.error {
    min-height: 60px;
    margin-bottom: 5px;
  }

  &:last-of-type {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: column;

    &:first-of-type {
      margin-right: 40px;
    }
  }
`;

export const ErrorMessage = styled.div`
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.error};
  text-align: center;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 170px;
  padding: 0;
  margin: 0 auto;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('color')},
    ${({ theme }) => theme.transition('outline-color')};
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.hover};
    outline: 1px solid ${({ theme }) => theme.colors.hover};
    box-shadow: ${({ theme }) => theme.shadows.btnShadow};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 180px;
  }
`;

export const WrapperTrainingList = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 0;
    margin-top: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
  }
`;

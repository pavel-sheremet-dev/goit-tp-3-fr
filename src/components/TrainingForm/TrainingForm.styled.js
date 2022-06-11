import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 32px 0;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    justify-content: start;
    width: 928px;
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
  color: ${({ theme }) => theme.colors.white};
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

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 42px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    &:first-of-type {
      margin-right: 40px;
    }

    &:last-of-type {
      margin-bottom: 0;
      margin-right: 0;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.error};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 170px;
  padding: 0;
  margin: 0;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
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

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 180px;
  }
`;

export const WrapperTrainingList = styled.div`
  margin-bottom: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 100%;
  }
`;

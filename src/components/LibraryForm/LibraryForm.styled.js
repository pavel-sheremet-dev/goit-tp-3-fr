import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    margin: ${props => (props.isarray ? '0' : '0 0 40px 0')};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    align-items: end;
    justify-content: start;
    margin: ${props => (props.isarray ? '0' : '0 0 40px 0')};
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  width: 280px;
  height: 82px;
  color: ${({ theme }) => theme.colors.lightText};

  & span {
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 152px;
    line-height: 1.21;
    margin-left: 0;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-bottom: 0;
    margin-right: 16px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const TitleLabel = styled(Label)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 346px;
    margin-bottom: 0;
  }
`;

export const AuthorLabel = styled(Label)`
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 336px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 250px;
  }
`;

export const Input = styled.input`
  height: 42px;
  width: 100%;
  padding: 12px;
  outline: 1px solid ${({ theme }) => theme.colors.placeholder};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border: none;
  box-shadow: 0 0 0 transparent;
  color: ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('outline-color')},
    ${({ theme }) => theme.transition('box-shadow')};

  &:hover,
  &:focus,
  &:active {
    box-shadow: inset ${({ theme }) => theme.shadows.inputShadow};
    outline-color: transparent;
    background-color: ${({ theme }) => theme.colors.background1};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  min-width: 170px;
  padding: 0;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.defaultFont};

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
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline-color: ${({ theme }) => theme.colors.mainBrandColor};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-top: 20px;
    line-height: 1.21;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 180px;
    margin-top: 0;
    margin-bottom: 15px;
    margin-left: 48px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  font-size: 10px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.error};
`;

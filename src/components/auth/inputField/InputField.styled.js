import styled from 'styled-components';

export const LabelStyled = styled.label`
  display: block;
  min-height: 80px;
  margin-bottom: 7px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.background1};

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.lightText};
  }

  & .required,
  & .error {
    color: ${({ theme }) => theme.colors.required};
  }

  & input {
    display: block;
    margin-top: 8px;
    margin-bottom: 3px;
    padding: 5px 8px;
    width: 100%;
    height: 42px;
    outline: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.21;
    background-color: ${({ theme }) => theme.colors.iconsHover};
    color: ${({ theme }) => theme.colors.defaultFont};
    border: none;
    box-shadow: ${({ theme }) => theme.shadows.inputShadow};

    &[type='password'] {
      font-family: Verdana;
      letter-spacing: 0.125em;
    }

    &[type='password']::placeholder {
      font-family: initial;
      letter-spacing: initial;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.placeholder};
    }
  }

  & .error {
    font-size: 8px;
    line-height: 1.25;
  }
`;

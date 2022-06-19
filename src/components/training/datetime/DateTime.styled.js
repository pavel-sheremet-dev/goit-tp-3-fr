import styled from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: flex;
  width: 280px;
  min-height: 42px;

  & .iconInput,
  & .iconDownInput {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }

  & .iconInput {
    margin-left: 5px;
    fill: ${({ theme }) => theme.colors.placeholder};
  }

  & .iconDownInput {
    right: 0;
    margin-right: 5px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 250px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 40px;
  border: none;
  outline: 1px solid ${({ theme }) => theme.colors.placeholder};
  box-shadow: 0 0 0 transparent;
  color: ${({ theme }) => theme.colors.defaultFont};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('box-shadow')},
    ${({ theme }) => theme.transition('outline-color')};

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: 500;
    font-size: 14px;
    line-height: 1.21;
  }

  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.background1};
    box-shadow: inset ${({ theme }) => theme.shadows.inputShadow};
    outline-color: transparent;
  }
`;

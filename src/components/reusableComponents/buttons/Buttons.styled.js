import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  padding: 0;
  cursor: pointer;
`;

export const NavLinkType1 = styled(NavLink)`
  display: block;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  outline: 1px solid ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('outline-color')},
    ${({ theme }) => theme.transition('color')};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline-color: ${({ theme }) => theme.colors.mainBrandColor};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;

export const NavLinkType2 = styled(NavLink)`
  padding: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};

  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('outline-color')};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
    outline-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const ButtonType1 = styled(Button)`
  background-color: transparent;
  outline: 1px solid ${({ theme }) => theme.colors.defaultFont};
  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('outline-color')},
    ${({ theme }) => theme.transition('color')};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.mainBrandColor};
    outline-color: ${({ theme }) => theme.colors.mainBrandColor};
    color: ${({ theme }) => theme.colors.buttonText};
  }
`;

export const ButtonType2 = styled(Button)`
  color: ${({ theme }) => theme.colors.buttonText};
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  outline: 1px solid ${({ theme }) => theme.colors.mainBrandColor};
  box-shadow: ${({ theme }) => theme.shadows.btnShadow};

  transition: ${({ theme }) => theme.transition('background-color')},
    ${({ theme }) => theme.transition('outline-color')};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
    outline-color: ${({ theme }) => theme.colors.hover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.lightText};
  }
`;

export const SignButton = styled(ButtonType2)`
  width: 100%;
  height: 60px;
`;

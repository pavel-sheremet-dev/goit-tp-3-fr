import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const IconWrapper = styled.div`
  width: 33px;
  height: 33px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: ${({ theme }) => theme.transition('background-color')};
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;

  & span {
    margin-left: 12px;
    transition: ${({ theme }) => theme.transition('color')};
  }
  &:not(:last-child) {
    margin-right: 8px;
  }

  & svg {
    fill: ${({ theme }) => theme.colors.placeholder};
    transition: ${({ theme }) => theme.transition('fill')};
  }

  &.active span,
  &:hover span,
  &:focus span {
    color: ${({ theme }) => theme.colors.mainBrandColor};
  }

  &.active div,
  &:hover div,
  &:focus div {
    background-color: ${({ theme }) => theme.colors.iconsHover};
  }

  &.active svg,
  &:hover svg,
  &:focus svg {
    fill: ${({ theme }) => theme.colors.mainBrandColor};
  }
`;

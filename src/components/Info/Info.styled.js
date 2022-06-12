import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px 25px 60px 25px;
  max-width: 480px;
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0 auto;
    padding-top: 64px;
    padding-bottom: 88px;
    max-width: 768px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding-top: 0;
  }
`;

export const Title = styled.h1`
  padding-bottom: 32px;
  text-align: center;
  font-family: 'Abril Fatface';
  font-weight: 400;
  font-size: 34px;
  line-height: 1.11;

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding-bottom: 48px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    padding-top: 0;
  }
`;

export const SecondTitle = styled.div`
  padding-bottom: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;
`;

export const ListHelp = styled.ul`
  :not(:last-child) {
    padding-bottom: 24px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    :not(:last-child) {
      padding-bottom: 32px;
    }
  }
`;

export const List = styled.li`
  display: flex;
  align-items: baseline;
  list-style: none;
  :not(:last-child) {
    padding-bottom: 12px;
  }
`;

export const ListItem = styled.p`
  padding-left: 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  color: ${({ theme }) => theme.colors.lightText};
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition('background-color')};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const LinkLogin = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({ theme }) => theme.colors.mainBrandColor};
  color: ${({ theme }) => theme.colors.white};
  transition: ${({ theme }) => theme.transition('background-color')};

  &:hover,
  &:focus,
  &:active {
    background-color: ${({ theme }) => theme.colors.hover};
  }

  :not(:last-child) {
    margin-right: 20px;
    box-shadow: none;
    border: 1px solid #000000;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.defaultFont};
    transition: ${({ theme }) => theme.transition('background-color')},
      ${({ theme }) => theme.transition('border')};

    &:hover,
    &:focus,
    &:active {
      background-color: ${({ theme }) => theme.colors.mainBrandColor};
      border: transparent;
    }
  }
`;

export const TextButton = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;
  text-align: center;
`;

export const SpanIcon = styled.span`
  width: 4px;
  height: 8px;
`;

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSpanBorder = styled.span`
  margin-left: 8px;
  width: 0px;
  height: 33px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin-left: 6px;
  }
`;

export const NavIcon = styled(NavLink)`
  width: 33px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.transition('background-color')};

  &.active {
    background-color: ${({ theme }) => theme.colors.iconsHover};
    border-radius: 50%;
  }
`;

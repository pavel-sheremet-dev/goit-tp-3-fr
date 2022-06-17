import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
`;

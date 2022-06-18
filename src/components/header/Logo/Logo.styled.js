import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLogo = styled(NavLink)`
  @media screen and (max-width: 767px) {
    margin-right: 5px;
  }
  font-family: 'Abril Fatface';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.35;
  margin-right: 30px;
`;

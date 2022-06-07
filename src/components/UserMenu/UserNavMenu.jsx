import { StyledBox } from 'components/header/Header.styled';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'images/svg/icon-home.svg';
import { NavLink } from "react-router-dom";
import {StyledSpanBorder} from "./UserMenu.styled";

export default function UserNavMenu() {
  return (
      <StyledBox>
      <NavLink 
          to="/libraryPage"
      className={({ isActive }) =>
          isActive ? 'activeNavLink' : 'currentNavLink'
        }
        >
       <HomeIcon  />
          </NavLink  >
        <NavLink 
          style = {{marginLeft:"13px"}}
          to="/trainingPage"
       className={({ isActive }) =>
          isActive ? 'activeNavLink' : 'currentNavLink'
        }
        >
       <BookIcon />
          </NavLink >
          <StyledSpanBorder></StyledSpanBorder>
        </StyledBox>
  )
}

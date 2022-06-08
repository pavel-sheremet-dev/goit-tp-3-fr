import { StyledBox } from 'components/header/Header.styled';
import { ReactComponent as BookIcon } from 'images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'images/svg/icon-home.svg';
import {NavIcon, StyledSpanBorder} from "./UserMenu.styled";

export default function UserNavMenu() {
  return (
      <StyledBox>
      <NavIcon
          to="/librarypage"
        >
       <HomeIcon  />
          </NavIcon  >
        <NavIcon 
          style = {{marginLeft:"13px"}}
          to="/trainingpage"

        >
       <BookIcon />
          </NavIcon >
          <StyledSpanBorder></StyledSpanBorder>
        </StyledBox>
  )
}

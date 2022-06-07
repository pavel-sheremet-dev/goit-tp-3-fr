import { StyledBox } from "components/header/Header.styled";
import Logo from "components/Logo/Logo";
import UserNavMenu from "components/UserMenu/UserNavMenu";
import { PageFormatContext, format } from "context/pageFormatContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { signOut } from "redux/auth/auth-operations";
import {getIsLoggedIn, getUserName} from "../../redux/auth/auth-selectors";
import { StyledHeaderButton, StyledNav, StyledSpanFirstLetterName, StyledSpanName } from "./Navigation.styled";


const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
   const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
    const name = useSelector(getUserName);
  return (
    <>
    <Logo />
      {isLoggedIn &&
        <>
        {isDesktop &&  <StyledBox>
        <StyledSpanFirstLetterName > {name && name.charAt(0)}</StyledSpanFirstLetterName>
        <StyledSpanName>{name && name }</StyledSpanName>
        </StyledBox >}
        {isTablet && <StyledBox>
        <StyledSpanFirstLetterName > {name && name.charAt(0)}</StyledSpanFirstLetterName>
        <StyledSpanName>{ }</StyledSpanName>
      </StyledBox >}
        <StyledBox>
      <StyledNav>
          <StyledBox>
          <UserNavMenu />
            </StyledBox>
            </StyledNav>
      <StyledBox>
       {isResponse && <StyledSpanFirstLetterName > {name && name.charAt(0)}</StyledSpanFirstLetterName>}
        {isMobile && <StyledSpanFirstLetterName > {name && name.charAt(0)}</StyledSpanFirstLetterName>}
      <StyledHeaderButton
      type="submit"
          onClick={() => dispatchEvent(signOut())}> 
        Вихід
        </StyledHeaderButton>
        </StyledBox>
        </StyledBox>
        </>
        }
      </>
  )
}

export default Navigation;
import { StyledBox } from 'components/header/Header.styled';
import Logo from 'components/Logo/Logo';
import UserNavMenu from 'components/UserMenu/UserNavMenu';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { getIsLoggedIn, getUserName } from 'redux/auth/auth-selectors';

import {
  StyledHeaderButton,
  StyledNav,
  StyledSpanFirstLetterName,
  StyledSpanName,
} from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  const name = useSelector(getUserName) ?? '';
  const dispatch = useDispatch();
  const iconName = name[0];

  const handleClick = () => {
    dispatch(authOperations.signOut());
  };

  return (
    <>
      <Logo />

      {isLoggedIn && (
        <>
          {(isDesktop || isTablet) && (
            <StyledBox>
              <StyledSpanFirstLetterName>{iconName}</StyledSpanFirstLetterName>
              <StyledSpanName>{name}</StyledSpanName>
            </StyledBox>
          )}
          <StyledBox>
            <StyledNav>
              <StyledBox>
                <UserNavMenu />
              </StyledBox>
            </StyledNav>
            {(isResponse || isMobile) && (
              <StyledSpanFirstLetterName> {iconName}</StyledSpanFirstLetterName>
            )}
            <StyledHeaderButton onClick={handleClick}>Вихід</StyledHeaderButton>
          </StyledBox>
        </>
      )}
    </>
  );
};

export default Navigation;

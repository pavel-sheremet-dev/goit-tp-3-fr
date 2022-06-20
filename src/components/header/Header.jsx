import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import LngSwitcher from './lngSwitcher';
import { ButtonTheme } from './buttonTheme/ButtonTheme';
import { ReactComponent as MenuIcon } from 'assets/images/svg/menu.svg';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { themes } from 'styles';

import Navigation from 'components/header/navigation/Navigation';

import {
  StyledContainerHeader,
  StyledHeader,
  StyledBox,
  StyledHeaderBox,
} from './Header.styled';

import { useContext, useState } from 'react';
import { PositionContext } from 'context/positionContext';
import MobileMenuButtons from 'components/buttons/mobileMenuButtons/MobileMenuButtons';
import MobileMenu from 'components/mobileMenu/MobileMenu';
import Logo from './logo/Logo';

const { delay } = themes.light;

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  const [renderMenu, setRenderMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const pageFormat = useContext(PageFormatContext);
  const { isRightHand } = useContext(PositionContext);

  const onOpen = () => {
    setRenderMenu(true);
    setShowMenu(true);
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
  };

  const onClose = () => {
    setShowMenu(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setRenderMenu(false);
    }, delay * 2);
  };

  const handleEscape = e => {
    if (e.code !== 'Escape') return;
    onClose();
    window.removeEventListener('keydown', handleEscape);
  };

  const isDesktop =
    pageFormat === format.desktop || pageFormat === format.tablet;

  return (
    <StyledHeader>
      <StyledHeaderBox>
        {isLoggedIn ? (
          <StyledContainerHeader style={{ justifyContent: 'start' }}>
            {!isDesktop && !isRightHand && (
              <MobileMenuButtons
                onClick={onOpen}
                IconComponent={MenuIcon}
                disabled={renderMenu}
                style={{ marginRight: '12px' }}
              />
            )}
            <Logo />
            <Navigation />
            {!isDesktop && isRightHand && (
              <MobileMenuButtons
                onClick={onOpen}
                IconComponent={MenuIcon}
                disabled={renderMenu}
                style={{ marginLeft: '12px' }}
              />
            )}
          </StyledContainerHeader>
        ) : (
          <StyledContainerHeader>
            {!isDesktop && !isRightHand && (
              <MobileMenuButtons
                onClick={onOpen}
                IconComponent={MenuIcon}
                disabled={renderMenu}
                style={{ marginRight: '12px' }}
              />
            )}
            <Logo />
            <StyledBox>
              <ButtonTheme />
              <LngSwitcher />
            </StyledBox>
            {!isDesktop && isRightHand && (
              <MobileMenuButtons
                onClick={onOpen}
                IconComponent={MenuIcon}
                disabled={renderMenu}
                style={{ marginLeft: '12px' }}
              />
            )}
          </StyledContainerHeader>
        )}
      </StyledHeaderBox>
      {!isDesktop && renderMenu && (
        <MobileMenu onClose={onClose} showMenu={showMenu} />
      )}
    </StyledHeader>
  );
};

export default Header;

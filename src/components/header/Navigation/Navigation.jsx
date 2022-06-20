import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useTranslation } from 'react-i18next';
import { getIsLoggedIn, getUserName } from 'redux/auth/auth-selectors';
import { trainingSelectors } from 'redux/training';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { routes } from 'routes/config';

import ExitModal from 'components/modals/exitModal/ExitModal';
import Modal from 'components/modals/modal/Modal';
import UserNavMenu from '../userMenu/UserNavMenu';
import { ButtonTheme } from '../buttonTheme/ButtonTheme';
import LngSwitcher from '../lngSwitcher/LngSwitcher';

import { StyledBox } from 'components/header/Header.styled';
import {
  StyledHeaderButton,
  StyledNav,
  StyledSpanBorder,
  StyledSpanFirstLetterName,
  StyledSpanName,
} from './Navigation.styled';

import { ReactComponent as BookIcon } from 'assets/images/svg/icon-book.svg';
import { ReactComponent as HomeIcon } from 'assets/images/svg/icon-home.svg';
import NavigationLink from '../userMenu/NavigationLink';

const { training, library } = routes;

const Navigation = ({ columnDirection = false, onCloseMobileMenu }) => {
  const { t } = useTranslation();
  const text = t('mobileMenu', { returnObjects: true });
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const status = useSelector(trainingSelectors.getStatus);
  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  const name = useSelector(getUserName) ?? '';
  const iconName = name[0]?.toUpperCase();

  const handleClick = () => {
    if (status === 'active') {
      toggleModal();
      return;
    }
    dispatch(authOperations.signOut());
  };

  const LogOut = () => {
    dispatch(authOperations.signOut());
    if (columnDirection) {
      onCloseMobileMenu();
    }
    toggleModal();
  };

  return (
    <>
      {isLoggedIn && (
        <>
          {!columnDirection && (
            <>
              {(isDesktop || isTablet) && (
                <StyledBox style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                  <StyledSpanFirstLetterName>
                    {iconName}
                  </StyledSpanFirstLetterName>
                  <StyledSpanName>{name}</StyledSpanName>
                </StyledBox>
              )}

              <StyledBox
                style={{
                  marginLeft: isDesktop || isTablet ? '0' : 'auto',
                  marginRight: '4px',
                }}
              >
                <ButtonTheme style={{ marginRight: '4px' }} />
                <LngSwitcher />
              </StyledBox>

              <StyledNav>
                <UserNavMenu />
              </StyledNav>

              {(isMobile || isTablet) && (
                <>
                  <StyledSpanBorder></StyledSpanBorder>
                  {isMobile && (
                    <StyledSpanFirstLetterName>
                      {iconName}
                    </StyledSpanFirstLetterName>
                  )}
                </>
              )}

              {(isDesktop || isTablet) && (
                <StyledHeaderButton onClick={handleClick}>
                  {t('logout')}
                </StyledHeaderButton>
              )}
            </>
          )}
        </>
      )}

      {columnDirection && (
        <>
          <StyledBox
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '7px',
              marginBottom: '10px',
            }}
          >
            <p>{text.language}</p>
            <LngSwitcher />
          </StyledBox>
          {isLoggedIn && (
            <>
              <StyledBox
                style={{ justifyContent: 'start', marginBottom: '15px' }}
              >
                <StyledSpanFirstLetterName>
                  {iconName}
                </StyledSpanFirstLetterName>
                <StyledSpanName>{name}</StyledSpanName>
                <StyledHeaderButton onClick={LogOut}>
                  {t('logout')}
                </StyledHeaderButton>
              </StyledBox>

              <NavigationLink
                to={library.path}
                IconComponent={HomeIcon}
                text={text.library}
                onCloseMobileMenu={onCloseMobileMenu}
              />
              <NavigationLink
                to={training.path}
                IconComponent={BookIcon}
                text={text.training}
                onCloseMobileMenu={onCloseMobileMenu}
                style={{ marginBottom: '15px' }}
              />
            </>
          )}
        </>
      )}
      {showModal && (
        <>
          <Modal onClose={toggleModal}>
            <ExitModal onClose={toggleModal} onLogOut={LogOut} />
          </Modal>
        </>
      )}
    </>
  );
};

export default Navigation;

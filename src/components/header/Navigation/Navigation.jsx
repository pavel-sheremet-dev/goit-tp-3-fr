import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useTranslation } from 'react-i18next';
import { getIsLoggedIn, getUserName } from 'redux/auth/auth-selectors';
import { trainingSelectors } from 'redux/training';
import { PageFormatContext, format } from 'context/pageFormatContext';

import ExitModal from 'components/modals/ExitModal/ExitModal';
import Logo from '../Logo/Logo';
import Modal from 'components/modals/Modal/Modal';
import UserNavMenu from '../UserMenu/UserNavMenu';
import { ButtonTheme } from '../buttonTheme/ButtonTheme';
import LngSwitcher from '../LngSwitcher/LngSwitcher';

import { StyledBox } from 'components/header/Header.styled';
import {
  StyledHeaderButton,
  StyledNav,
  StyledSpanFirstLetterName,
  StyledSpanName,
} from './Navigation.styled';

const Navigation = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isActiveTraining = useSelector(trainingSelectors.getStatus);
  const pageFormat = useContext(PageFormatContext);
  const isResponse = pageFormat === format.response;
  const isMobile = pageFormat === format.mobile;
  const isTablet = pageFormat === format.tablet;
  const isDesktop = pageFormat === format.desktop;
  const name = useSelector(getUserName) ?? '';
  const iconName = name[0]?.toUpperCase();

  const handleClick = () => {
    if (isActiveTraining === 'active') {
      toggleModal();
      return;
    }

    dispatch(authOperations.signOut());
  };

  const LogOut = () => {
    dispatch(authOperations.signOut());
    toggleModal();
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
            <StyledBox>
              <ButtonTheme />
              <LngSwitcher />
            </StyledBox>
            <StyledNav>
              <StyledBox>
                <UserNavMenu />
              </StyledBox>
            </StyledNav>
            {(isResponse || isMobile) && (
              <StyledSpanFirstLetterName>{iconName}</StyledSpanFirstLetterName>
            )}
            <StyledHeaderButton onClick={handleClick}>
              {t('logout')}
            </StyledHeaderButton>
          </StyledBox>
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

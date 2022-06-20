import { useState, useEffect, useContext } from 'react';
import { PositionContext } from 'context/positionContext';
import { useTranslation } from 'react-i18next';

import Navigation from 'components/header/navigation/Navigation';
import MobileMenuButtons from 'components/buttons/mobileMenuButtons/MobileMenuButtons';
import Switch from 'components/common/swith/Switch';

import { StyledMobileMenu, BottomPanel } from './MobileMenu.styled';
import { ReactComponent as CloseIcon } from 'assets/images/svg/close.svg';

const MobileMenu = ({ onClose, showMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isRightHand, toggleHand } = useContext(PositionContext);

  const { t } = useTranslation();
  const text = t('mobileMenu', { returnObjects: true });

  useEffect(() => {
    setIsOpen(showMenu);
  }, [showMenu]);

  return (
    <StyledMobileMenu isRightHand={isRightHand} isOpen={isOpen}>
      <div className="box">
        <MobileMenuButtons
          onClick={onClose}
          IconComponent={CloseIcon}
          disabled={!isOpen}
          className="close-btn"
        />

        <Navigation columnDirection onCloseMobileMenu={onClose} />
        <BottomPanel>
          <Switch
            title={text.hand}
            click={toggleHand}
            checked={isRightHand}
            width={40}
          />
        </BottomPanel>
      </div>
      <div className="backdrop" onClick={onClose} />
    </StyledMobileMenu>
  );
};

export default MobileMenu;

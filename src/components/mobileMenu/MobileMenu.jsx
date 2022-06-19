import { useState, useEffect, useContext } from 'react';
import { StyledMobileMenu, BottomPanel } from './MobileMenu.styled';
import { ReactComponent as CloseIcon } from 'images/svg/close.svg';
import Switch from 'components/swith/Switch';
import { PositionContext } from 'context/positionContext';
import MobileMenuButtons from 'components/buttons/mobileMenuButtons/MobileMenuButtons';
import Navigation from 'components/header/Navigation/Navigation';
import { useTranslation } from 'react-i18next';

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

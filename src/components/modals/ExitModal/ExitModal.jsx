import { useTranslation } from 'react-i18next';
import {
  ExitModalStyled,
  Text,
  ButtonsDiv,
  ButtonOrange,
  ButtonWhite,
} from './ExitModal.styled';

export default function ExitModal({ onClose, onLogOut }) {
  const { t } = useTranslation();
  return (
    <ExitModalStyled>
      <Text>{t('lost')}</Text>
      <ButtonsDiv>
        <ButtonWhite onClick={onClose}>{t('cancel')}</ButtonWhite>
        <ButtonOrange onClick={onLogOut}>{t('leave')}</ButtonOrange>
      </ButtonsDiv>
    </ExitModalStyled>
  );
}

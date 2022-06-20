import { CongratsModalStyled, Text, Button } from './CongratsModal.styled';
import { ReactComponent as ThumbUpIcon } from 'assets/images/svg/thumbUp.svg';
import { useTranslation } from 'react-i18next';

export default function CongratsModal({ text, onBtnClick }) {
  const { t } = useTranslation();
  return (
    <CongratsModalStyled>
      <ThumbUpIcon style={{ fill: '#FF6B08' }} />
      <Text>
        {t('congrats')} <br /> {text}.
      </Text>
      <Button type="button" onClick={onBtnClick}>
        {t('done')}
      </Button>
    </CongratsModalStyled>
  );
}

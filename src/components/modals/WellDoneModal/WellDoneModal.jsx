import { useTranslation } from 'react-i18next';
import { WellDoneModalStyled, Text, Button } from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'assets/images/svg/thumbUp.svg';

export default function WellDoneModal({ onBtnClick }) {
  const { t } = useTranslation();
  const handleNewTraining = () => {
    onBtnClick();
  };

  return (
    <WellDoneModalStyled>
      <ThumbUpIcon style={{ fill: '#A6ABB9' }} />
      <Text>
        {t('wellDone')}
        <br />
        {t('faster')}
        <br />
        {t('can')}
      </Text>
      <Button type="button" onClick={handleNewTraining}>
        {t('new')}
      </Button>
    </WellDoneModalStyled>
  );
}

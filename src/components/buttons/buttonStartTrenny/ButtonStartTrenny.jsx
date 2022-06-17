import { useTranslation } from 'react-i18next';
import { Button, BoxButton } from './CSSButtonTrenny';

const StartTrenny = ({ props }) => {
  const { t } = useTranslation();
  return (
    <BoxButton>
      <Button type="button" onClick={props}>
        {t('start')}
      </Button>
    </BoxButton>
  );
};

export default StartTrenny;

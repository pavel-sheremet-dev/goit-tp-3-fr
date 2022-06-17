import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import RedirectTimer from '../components/common/redirectTimer/RedirectTimer';
import Section from 'components/common/section/Section';
import { Button } from 'components/buttons/buttonStartTrenny/CSSButtonTrenny';

const NotFoundPage = () => {
  const { t } = useTranslation();
  const [timeToRedirect, setTimeToRedirect] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/', { replace: true });
  };

  useEffect(() => {
    if (!timeToRedirect) return;
    navigate('/', { replace: true });
  }, [navigate, timeToRedirect]);

  return (
    <Section title="404" style={{ fontSize: '20px' }} titleLevel="h2">
      <Button type="button" onClick={handleClick}>
        {t('mainPage')}
      </Button>
      <p
        style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '20px' }}
      >
        {t('sorry')}
      </p>
      <RedirectTimer getRedirect={setTimeToRedirect} />
    </Section>
  );
};

export default NotFoundPage;

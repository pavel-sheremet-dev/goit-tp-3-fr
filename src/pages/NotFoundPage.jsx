import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import RedirectTimer from '../components/common/redirectTimer/RedirectTimer';
import Section from 'components/common/section/Section';
import { Button } from 'components/buttons/buttonStartTrenny/CSSButtonTrenny';

const NotFoundPage = () => {
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
        На головну сторінку
      </Button>
      <p
        style={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '20px' }}
      >
        Нажаль, за вашим запитом сторінка не знайдена
      </p>
      <RedirectTimer getRedirect={setTimeToRedirect} />
    </Section>
  );
};

export default NotFoundPage;

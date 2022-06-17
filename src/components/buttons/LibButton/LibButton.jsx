import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { routes } from 'routes/config';
import { useTranslation } from 'react-i18next';

import { LibActionButton } from './LibButton.styled';

const { training } = routes;

const LibButton = () => {
  const { t } = useTranslation();
  const [navigate, setNavigate] = useState(false);

  const onHandleClick = () => {
    setNavigate(true);
  };

  return (
    <LibActionButton type="button" onClick={onHandleClick}>
      {t('training')}
      {navigate && <Navigate to={`/${training.path}`} replace={true} />}
    </LibActionButton>
  );
};

export default LibButton;

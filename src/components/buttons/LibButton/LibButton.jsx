import { LibActionButton } from './LibButton.styled';
import { routes } from 'routes/config';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';

const { training } = routes;

const LibButton = () => {
  const [navigate, setNavigate] = useState(false);

  const onHandleClick = () => {
    setNavigate(true);
  };

  return (
    <LibActionButton type="button" onClick={onHandleClick}>
      Моє тренування
      {navigate && <Navigate to={`/${training.path}`} replace={true} />}
    </LibActionButton>
  );
};

export default LibButton;

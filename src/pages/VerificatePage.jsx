import axios from 'axios';

import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const VerificatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        await axios.get(location.pathname);
        navigate('/', { replace: true });
      } catch (error) {
        navigate('/', { replace: true });
      }
    };
    verifyUser();
  }, [location, navigate]);

  return (
    <>
      <Loader />
    </>
  );
};

export default VerificatePage;

import axios from 'axios';

import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { getUser } from 'redux/auth/auth-operations';
import { setToken } from 'redux/auth/auth-slice';

const VerificatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.includes('oauth')) {
      dispatch(setToken(token));
      dispatch(getUser());
      navigate('/', { replace: true });
      return;
    }
    const verifyUser = async () => {
      try {
        console.log(location.pathname);
        await axios.get(location.pathname);
        navigate('/', { replace: true });
      } catch (error) {
        navigate('/', { replace: true });
      }
    };
    verifyUser();
  }, [dispatch, location, navigate, token]);

  return (
    <>
      <Loader />
    </>
  );
};

export default VerificatePage;

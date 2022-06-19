import axios from 'axios';
import { useTranslation } from 'react-i18next';

import { Loader } from 'components/common/loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUser } from 'redux/auth/auth-operations';
import { setToken } from 'redux/auth/auth-slice';
import { routes } from 'routes/config';

const VerificatePage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const { token } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname.includes('oauth')) {
      dispatch(setToken(token));
      dispatch(getUser());
      navigate(routes.login.absolutePath, { replace: true });
      return;
    }
    const verifyUser = async () => {
      try {
        await axios.get(location.pathname);
        navigate(routes.login.absolutePath, { replace: true });
      } catch (error) {
        toast.error(t('alreadyVerified'));
        navigate(routes.login.absolutePath, { replace: true });
      }
    };
    verifyUser();
  }, [dispatch, location, navigate, t, token]);

  return (
    <>
      <Loader />
    </>
  );
};

export default VerificatePage;

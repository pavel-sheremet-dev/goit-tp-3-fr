import { useEffect } from 'react';
import { useState } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import { MainStyled } from './RegistrationPage.styled';
import Advantages from 'components/advantages/Advantages';
import Signup from 'components/auth/signUp/SignUp';
import { Loader } from 'components/common/loader/Loader';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
const { response, mobile } = format;

const RegistrationPage = () => {
  const [showInfoLocalStorage] = useState(() =>
    Boolean(localStorage.getItem('info')),
  );
  const loading = useSelector(authSelectors.getLoading);

  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;

  useEffect(() => {
    if (isMobile) {
      localStorage.setItem('infoKey', 'firstInfo');
    }
  }, [isMobile]);

  const valueStorage = localStorage.getItem('infoKey');

  const [showInfo, setShowInfo] = useState(true);

  const conditionRender =
    (!showInfoLocalStorage && showInfo && valueStorage) ||
    (!showInfoLocalStorage && !showInfo && valueStorage);

  return (
    <MainStyled>
      {isMobile && (
        <>
          {((!showInfo && !valueStorage) || showInfoLocalStorage) && <Signup />}
          {conditionRender ? (
            <Signup />
          ) : (
            <Advantages handleClick={setShowInfo} />
          )}
        </>
      )}
      {!isMobile && (
        <>
          <Signup />
          <Advantages handleClick={setShowInfo} />
        </>
      )}
      {loading && <Loader />}
    </MainStyled>
  );
};

export default RegistrationPage;

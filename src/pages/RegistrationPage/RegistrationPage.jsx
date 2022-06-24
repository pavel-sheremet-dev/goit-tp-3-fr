import { useEffect } from 'react';
import { useState } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import { MainStyled } from './RegistrationPage.styled';
import Advantages from 'components/advantages/Advantages';
import Signup from 'components/auth/signUp/SignUp';
const { response, mobile } = format;

const RegistrationPage = () => {
  const [showInfoLocalStorage] = useState(() =>
    Boolean(localStorage.getItem('info')),
  );
  const [showInfo, setShowInfo] = useState(true);

  const pageFormat = useContext(PageFormatContext);
  const isMobile = pageFormat === response || pageFormat === mobile;
  const valueStorage = localStorage.getItem('infoKey');
  const conditionRender =
    (!showInfoLocalStorage && showInfo && valueStorage) ||
    (!showInfoLocalStorage && !showInfo && valueStorage);
  useEffect(() => {
    const isMobile = pageFormat === response || pageFormat === mobile;
    if (isMobile) {
      localStorage.setItem('infoKey', 'firstInfo');
    }
  }, [isMobile, pageFormat]);
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
    </MainStyled>
  );
};

export default RegistrationPage;

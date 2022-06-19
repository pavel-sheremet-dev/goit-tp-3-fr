import { useEffect, useRef } from 'react';
import Info from 'components/auth/Info/Info';
import RegistrationPageContent from 'components/auth/registration/RegistrationPageContent/RegistrationPageContent';
import { useState } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
import { Section } from './RegistrationPage.styled';
const { response, mobile } = format;

const RegistrationPage = () => {
  const [showInfoLocalStorage] = useState(() =>
    Boolean(localStorage.getItem('info')),
  );
  const [showInfo, setShowInfo] = useState(true);
  const titleRef = useRef();
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
    <Section>
      {isMobile && (
        <>
          {((!showInfo && !valueStorage) || showInfoLocalStorage) && (
            <RegistrationPageContent titleRef={titleRef} />
          )}
          {conditionRender ? (
            <RegistrationPageContent titleRef={titleRef} />
          ) : (
            <Info handleClick={setShowInfo} />
          )}
        </>
      )}
      {!isMobile && (
        <>
          <RegistrationPageContent titleRef={titleRef} />
          <Info handleClick={setShowInfo} />
        </>
      )}
    </Section>
  );
};

export default RegistrationPage;

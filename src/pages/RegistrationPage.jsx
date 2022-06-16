import { useRef } from 'react';
import Info from 'components/auth/Info/Info';
import RegistrationPageContent from 'components/Registration/RegistrationPageContent/RegistrationPageContent';
import { Section } from './RegistrationPage.styled';
import { useState } from 'react';
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useContext } from 'react';
const { response, mobile } = format;

const RegistrationPage = () => {
  const [showInfoLocalStorage] = useState(() =>
    Boolean(localStorage.getItem('info')),
  );
  const [showInfo, setShowInfo] = useState(true);
  const titleRef = useRef();

  const pageFormat = useContext(PageFormatContext);

  const isMobile = pageFormat === response || pageFormat === mobile;

  return (
    <Section>
      {isMobile && (
        <>
          {(!showInfo || showInfoLocalStorage) && (
            <RegistrationPageContent titleRef={titleRef} />
          )}
          {!showInfoLocalStorage && showInfo && (
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

// 1.1 Форма регистрации
// 1.2 Приветствие (в мобильной версии в случае если клиент не регистрировался - состояние)
// При сабмите во время регистрации можно в Локальное Хранилие статус, При рендеринге страницы стягивать статус
// и рендерить или нет

export default RegistrationPage;

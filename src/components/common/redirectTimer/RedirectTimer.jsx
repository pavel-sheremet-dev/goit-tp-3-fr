import { useState, useEffect, useRef, useContext } from 'react';
import { themes } from 'styles';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'context/themeContext';

const RedirectTimer = ({ getRedirect }) => {
  const { t } = useTranslation();
  const [timer, setTimer] = useState(5);
  const intervalId = useRef(null);
  const theme = useContext(ThemeContext);

  useEffect(() => {
    if (timer) return;
    clearInterval(intervalId.current);
    getRedirect(true);
  }, [getRedirect, timer]);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return timer ? (
    <div>
      {t('redirect')}
      <b
        style={{
          display: 'inline-flex',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
          height: '30px',
          backgroundColor: themes[theme].colors.mainBrandColor,
        }}
      >
        {timer}
      </b>
      {t('sec')}
    </div>
  ) : (
    <div>{t('redirection')}</div>
  );
};

export default RedirectTimer;

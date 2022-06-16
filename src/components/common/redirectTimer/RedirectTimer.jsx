import { useState, useEffect, useRef } from 'react';
import { getCssVars } from 'styles/vars';

const RedirectTimer = ({ getRedirect }) => {
  const [timer, setTimer] = useState(5);
  const intervalId = useRef(null);

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
      Ви будете автоматично перенаправлені через{' '}
      <b
        style={{
          display: 'inline-flex',
          color: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50px',
          height: '30px',
          backgroundColor: getCssVars().colors.mainBrandColor,
        }}
      >
        {timer}
      </b>{' '}
      сек.
    </div>
  ) : (
    <div>Перенаправлення...</div>
  );
};

export default RedirectTimer;

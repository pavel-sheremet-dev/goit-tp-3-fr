import { createPortal } from 'react-dom';
import { LibAddButton } from './RadialButton.styled';
import { useState, useEffect } from 'react';

const radialButtonRoot = document.querySelector('#root');

const RadialButton = ({ onRadialClick, important }) => {
  const [offset, setOffset] = useState(0);
  const actionAmout = important * 250;

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return createPortal(
    <>
      {offset > actionAmout && (
        <button type="button" onClick={onRadialClick}>
          <LibAddButton />
        </button>
      )}
    </>,
    radialButtonRoot,
  );
};
export default RadialButton;

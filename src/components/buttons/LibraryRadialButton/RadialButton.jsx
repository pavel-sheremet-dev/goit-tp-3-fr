import { createPortal } from 'react-dom';
import { LibAddButton, Button } from './RadialButton.styled';
// import { useState, useEffect } from 'react';

const radialButtonRoot = document.querySelector('#root');

export const RadialButton = ({ onRadialClick, important }) => {
  // const [offset, setOffset] = useState(0);
  // const actionAmout = important * 250;

  // useEffect(() => {
  //   const onScroll = () => setOffset(window.pageYOffset);
  //   window.removeEventListener('scroll', onScroll);
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return createPortal(
    <>
      <button type="button" onClick={onRadialClick}>
        <LibAddButton />
      </button>
    </>,
    radialButtonRoot,
  );
};
export const AddButton = ({ onBtnClick }) => {
  return (
    <Button type="button" onClick={() => onBtnClick(true)}>
      <LibAddButton />
    </Button>
  );
};

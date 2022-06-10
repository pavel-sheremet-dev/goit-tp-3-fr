import React, { useState } from 'react';
import { Button, BoxButton } from './CSSButtonTrenny';

const StartTrenny = () => {
  const [state, setState] = useState({
    isActive: false,
    data: [],
  });
  const { isActive } = state;
  const createActive = () => {
    setState({ ...state, isActive: true });
  };
  return (
    <BoxButton>
      <Button type="button" onClick={createActive}>
        Почати тренування
      </Button>
    </BoxButton>
  );
};

export default StartTrenny;

import React, { useState } from 'react';

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
    <div>
      <button type="button" onClick={createActive}>
        Почати тренування
      </button>
    </div>
  );
};

export default StartTrenny;

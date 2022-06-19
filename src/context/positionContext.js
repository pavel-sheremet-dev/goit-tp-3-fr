import { createContext } from 'react';

const PositionContext = createContext({
  isRightHand: false,
  toggleHand: () => {},
});

export { PositionContext };

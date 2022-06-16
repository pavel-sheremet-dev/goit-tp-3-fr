import { Button, BoxButton } from './CSSButtonTrenny';

const StartTrenny = ({ props }) => {
  return (
    <BoxButton>
      <Button type="button" onClick={props}>
        Почати тренування
      </Button>
    </BoxButton>
  );
};

export default StartTrenny;

import { CongratsModalStyled, Text, Button } from './CongratsModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';

export default function CongratsModal({ text, onBtnClick }) {
  return (
    <CongratsModalStyled>
      <ThumbUpIcon style={{ fill: '#FF6B08' }} />
      <Text>
        Вітаю! <br /> {text}.
      </Text>
      <Button type="button" onClick={onBtnClick}>
        Готово
      </Button>
    </CongratsModalStyled>
  );
}

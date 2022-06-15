import {
  WellDoneModalStyled,
  Text,
  Buttons,
  ButtonOrange,
  ButtonWhite,
} from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';

export default function WellDoneModal({ onClose }) {
  return (
    <WellDoneModalStyled>
      <ThumbUpIcon style={{ fill: '#A6ABB9' }} />
      <Text>
        Ви молодчина,
        <br />
        але потрібно швидше!
        <br />
        {'Наступного разу вам усе вдасться)'}
      </Text>
      <Buttons>
        <ButtonOrange type="button" onClick={onClose}>
          Новє тренування
        </ButtonOrange>
        <ButtonWhite type="button" onClick={onClose}>
          Назад
        </ButtonWhite>
      </Buttons>
    </WellDoneModalStyled>
  );
}

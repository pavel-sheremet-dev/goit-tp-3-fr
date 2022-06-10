import {
  WellDoneModalStyled,
  Text,
  Buttons,
  ButtonOrange,
  ButtonWhite,
} from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';

export default function WellDoneModal() {
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
        <ButtonOrange type="button">Новє тренування</ButtonOrange>
        <ButtonWhite type="button">Назад</ButtonWhite>
      </Buttons>
    </WellDoneModalStyled>
  );
}

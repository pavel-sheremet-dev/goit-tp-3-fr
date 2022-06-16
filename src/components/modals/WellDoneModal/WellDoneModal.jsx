import {
  WellDoneModalStyled,
  Text,
  Buttons,
  ButtonOrange,
} from './WellDoneModal.styled';
import { ReactComponent as ThumbUpIcon } from 'images/svg/thumbUp.svg';

export default function WellDoneModal({ onBtnClick }) {
  const handleNewTraining = () => {
    onBtnClick();
  };

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
        <ButtonOrange type="button" onClick={handleNewTraining}>
          Новє тренування
        </ButtonOrange>
      </Buttons>
    </WellDoneModalStyled>
  );
}

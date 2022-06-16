import {
  ExitModalStyled,
  Text,
  ButtonsDiv,
  ButtonOrange,
  ButtonWhite,
} from './ExitModal.styled';

export default function ExitModal({ onClose, onLogOut }) {
  return (
    <ExitModalStyled>
      <Text>
        Ви молодчина/ Якщо Ви вийдете з програми незбережені дані будуть
        втрачені
      </Text>
      <ButtonsDiv>
        <ButtonWhite onClick={onClose}>Відміна</ButtonWhite>
        <ButtonOrange onClick={onLogOut}>Вийти</ButtonOrange>
      </ButtonsDiv>
    </ExitModalStyled>
  );
}

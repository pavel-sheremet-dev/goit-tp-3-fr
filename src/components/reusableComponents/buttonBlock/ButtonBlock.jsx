import {
  ButtonType1,
  ButtonType2,
  NavLinkType1,
  NavLinkType2,
} from '../buttons/Buttons.styled';
import { BtnBlockContrainer } from './ButtonBlock.styled';

const ButtonBlock = ({
  title1,
  title2,
  onFirstBtnClick,
  onSecondBtnClick,
  onFirstBtnTo = null,
  onSecondBtnTo = null,
  column = false,
  fullWidth = false,
}) => {
  return (
    <BtnBlockContrainer column={column} fullWidth={fullWidth}>
      {onFirstBtnTo && (
        <NavLinkType1
          className={'block-item'}
          to={onFirstBtnTo}
          onClick={onFirstBtnClick}
        >
          {title1}
        </NavLinkType1>
      )}
      {!onFirstBtnTo && (
        <ButtonType1
          className={'block-item'}
          type="button"
          onClick={onFirstBtnClick}
        >
          {title1}
        </ButtonType1>
      )}
      {onSecondBtnTo && (
        <NavLinkType2
          className={'block-item'}
          to={onSecondBtnTo}
          onClick={onSecondBtnClick}
        >
          {title2}
        </NavLinkType2>
      )}
      {!onSecondBtnTo && (
        <ButtonType2
          className={'block-item'}
          type="button"
          onClick={onSecondBtnClick}
        >
          {title2}
        </ButtonType2>
      )}
    </BtnBlockContrainer>
  );
};

export default ButtonBlock;

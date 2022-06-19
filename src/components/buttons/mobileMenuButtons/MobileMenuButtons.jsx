import { ButtonStyled } from './MobileMenuButtons.styled';

const IconButton = ({ onClick, IconComponent, disabled, style, className }) => {
  return (
    <ButtonStyled
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
    >
      <IconComponent />
    </ButtonStyled>
  );
};

export default IconButton;

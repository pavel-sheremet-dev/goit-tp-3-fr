import { StyledButton } from "./Button.styled";

const Button = ({ onClick, IconComponent, disabled, style }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <IconComponent />
    </StyledButton>
  );
};

export default Button;

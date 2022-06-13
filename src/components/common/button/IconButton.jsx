import { StyledButton } from './IconButton.styled';

const IconButton = ({ onClick, IconComponent, disabled, style }) => {
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

export default IconButton;

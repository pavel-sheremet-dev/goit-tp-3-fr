import { StyledButton } from './IconButton.styled';

const IconButton = ({ onClick, IconComponent, disabled, style, className }) => {
  return (
    <StyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={className}
    >
      <IconComponent />
    </StyledButton>
  );
};

export default IconButton;

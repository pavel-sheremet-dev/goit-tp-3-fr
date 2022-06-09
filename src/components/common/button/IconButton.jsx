import { StyledButton } from './IconButton.styled';

const IconButton = ({ onClick, IconComponent, className, disabled, style }) => {
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

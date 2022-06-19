import { NavLinkStyled, IconWrapper } from './UserMenu.styled';

const NavigationLink = ({
  to,
  text,
  IconComponent,
  style,
  onCloseMobileMenu = null,
}) => {
  const handleClick = () => {
    if (!onCloseMobileMenu) return;
    onCloseMobileMenu();
  };

  return (
    <NavLinkStyled to={to} style={style} onClick={handleClick}>
      <IconWrapper>
        <IconComponent />
      </IconWrapper>
      {text && <span>{text}</span>}
    </NavLinkStyled>
  );
};

export default NavigationLink;

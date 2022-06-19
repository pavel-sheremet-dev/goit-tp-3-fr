import { routes } from 'routes/config';

const { StyledLogo } = require('./Logo.styled');

const Logo = ({ style }) => {
  return (
    <StyledLogo style={style} to={routes.login.absolutePath}>
      BR
    </StyledLogo>
  );
};

export default Logo;

import { routes } from 'routes/config';

const { StyledLogo } = require('./Logo.styled');

const Logo = () => {
  return <StyledLogo to={routes.login.absolutePath}>BR</StyledLogo>;
};

export default Logo;

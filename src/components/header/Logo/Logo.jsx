import { useSelector } from 'react-redux';
import { routes } from 'routes/config';
import { authSelectors } from 'redux/auth';
const { signUp, library } = routes;
const { StyledLogo } = require('./Logo.styled');

const Logo = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <StyledLogo to={isLoggedIn ? library.path : signUp.path}>BR</StyledLogo>
  );
};

export default Logo;

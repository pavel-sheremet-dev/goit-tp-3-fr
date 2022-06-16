import Navigation from 'components/header/Navigation/Navigation';
import { StyledContainerHeader } from './Header.styled';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <StyledContainerHeader style={{ justifyContent: 'space-between' }}>
          <Navigation />
        </StyledContainerHeader>
      ) : (
        <StyledContainerHeader>
          <Navigation />
        </StyledContainerHeader>
      )}
    </>
  );
};

export default Header;

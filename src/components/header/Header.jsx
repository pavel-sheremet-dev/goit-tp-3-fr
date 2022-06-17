import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

import Navigation from 'components/header/Navigation/Navigation';

import {
  StyledContainerHeader,
  StyledHeader,
  StyledHeaderBox,
} from './Header.styled';

const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <StyledHeader>
      <StyledHeaderBox>
        {isLoggedIn ? (
          <StyledContainerHeader style={{ justifyContent: 'space-between' }}>
            <Navigation />
          </StyledContainerHeader>
        ) : (
          <StyledContainerHeader>
            <Navigation />
          </StyledContainerHeader>
        )}
      </StyledHeaderBox>
    </StyledHeader>
  );
};

export default Header;

import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import LngSwitcher from './LngSwitcher';
import { ButtonTheme } from './buttonTheme/ButtonTheme';

import Navigation from 'components/header/Navigation/Navigation';

import {
  StyledContainerHeader,
  StyledHeader,
  StyledBox,
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
            <StyledBox>
              <ButtonTheme />
              <LngSwitcher />
            </StyledBox>
          </StyledContainerHeader>
        )}
      </StyledHeaderBox>
    </StyledHeader>
  );
};

export default Header;

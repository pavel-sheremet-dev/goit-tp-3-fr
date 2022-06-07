
import Navigation from "components/Navigation/Navigation";
import {StyledContainerHeader, StyledHeader } from "./Header.styled";

const Header = () => {

  return (
    <StyledHeader>
      <StyledContainerHeader >
 <Navigation/>
      </StyledContainerHeader>
    </StyledHeader>
  );
};

export default Header;

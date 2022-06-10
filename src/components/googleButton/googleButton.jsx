import {
    StyledGoogleButton,
    StyledRef,
    StyledContainer,
  } from './googleButton.styled';
  import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';
  
  export default function GoogleButton({ onClick, style }) {
    return (
      <StyledContainer>
        <StyledGoogleButton onClick={onClick} style={style}>
          <GoogleIcon />
          <StyledRef
            href="
            http://localhost:7778/users/google
            "
          >
            Google
          </StyledRef>
        </StyledGoogleButton>
      </StyledContainer>
    );
  }
  
import {
  StyledGoogleButton,
  StyledRef,
  StyledContainer,
} from './googleButton.styled';
import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';

export default function GoogleButton({ onClick, style, titleRef }) {
  return (
    <StyledContainer>
      <StyledGoogleButton onClick={onClick} style={style} ref={titleRef}>
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

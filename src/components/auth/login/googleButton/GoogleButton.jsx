import {
  StyledRef,
  StyledContainer,
  ContainerGoogleIcon,
} from './GoogleButton.styled';
import { ReactComponent as GoogleIcon } from 'images/svg/google-icon.svg';

export default function GoogleButton({ onClick, style }) {
  const url = process.env.REACT_APP_API_BASE_URL;

  return (
    <StyledContainer>
      <StyledRef
        href={`${url}/api/users/google`}
        onClick={onClick}
        style={style}
      >
        <ContainerGoogleIcon>
          <GoogleIcon />
        </ContainerGoogleIcon>
        Google
      </StyledRef>
    </StyledContainer>
  );
}

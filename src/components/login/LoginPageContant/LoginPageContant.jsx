import GoogleButton from 'components/login/googleButton/GoogleButton';
import LoginForm from 'components/login/LoginForm/LoginForm';
import { StyledSection, StyledTablet } from './LoginPageContant.styled';

export default function LoginPageContant() {
  return (
    <StyledSection>
      <StyledTablet>
      <GoogleButton />
      <LoginForm />
      </StyledTablet>
    </StyledSection>
  );
}

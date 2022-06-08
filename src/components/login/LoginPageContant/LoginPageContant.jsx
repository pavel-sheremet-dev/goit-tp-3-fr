import GoogleButton from 'components/login/googleButton/GoogleButton';
import LoginForm from 'components/login/LoginForm/LoginForm';
import { StyledSection } from './LoginPageContant.styled';

export default function LoginPageContant() {
  return (
    <StyledSection>
      <GoogleButton />
      <LoginForm />
    </StyledSection>
  );
}

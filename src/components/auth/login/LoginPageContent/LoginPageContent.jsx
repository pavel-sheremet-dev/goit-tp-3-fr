import GoogleButton from 'components/auth/login/googleButton/GoogleButton';
import LoginForm from 'components/auth/login/LoginForm/LoginForm';
import { StyledSection, StyledTablet } from './LoginPageContent.styled';

export default function LoginPageContent() {
  return (
    <StyledSection>
      <StyledTablet>
        <GoogleButton />
        <LoginForm />
      </StyledTablet>
    </StyledSection>
  );
}

import GoogleButton from 'components/login/googleButton/GoogleButton';
import LoginForm from 'components/login/LoginForm/LoginForm';
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

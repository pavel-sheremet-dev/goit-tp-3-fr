import LoginPageContent from 'components/auth/login/loginPageContent/LoginPageContent';
import LoginQuote from 'components/auth/login/loginQuote/LoginQuote';
import {
  Section,
  LoginSection,
} from './registrationPage/RegistrationPage.styled';

const LoginPage = () => {
  return (
    <LoginSection>
      <Section>
        <LoginPageContent />
        <LoginQuote />
      </Section>
    </LoginSection>
  );
};

export default LoginPage;

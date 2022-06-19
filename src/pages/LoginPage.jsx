import LoginPageContent from 'components/auth/login/LoginPageContent/LoginPageContent';
import LoginQuote from 'components/auth/login/LoginQuote/LoginQuote';
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

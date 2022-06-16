import LoginPageContent from 'components/auth/login/LoginPageContent/LoginPageContent';
import LoginQuote from 'components/auth/login/LoginQuote/LoginQuote';
import { Section } from './RegistrationPage/RegistrationPage.styled';

const LoginPage = () => {
  return (
    <Section>
      <LoginPageContent />
      <LoginQuote />
    </Section>
  );
};

export default LoginPage;

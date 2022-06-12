import SignInForm from 'components/auth/SignInForm';
import LoginPageContent from 'components/login/LoginPageContent/LoginPageContent';
import LoginQuote from 'components/login/LoginQuote/LoginQuote';
import { Section } from './RegistrationPage.styled';

const LoginPage = () => {
  return (
    <Section>
      <LoginPageContent />
      <LoginQuote />
      {/* <SignInForm /> */}
    </Section>
  );
};

export default LoginPage;

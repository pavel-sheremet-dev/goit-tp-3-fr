import SignInForm from 'components/auth/SignInForm';
import LoginPageContent from 'components/login/LoginPageContent/LoginPageContent';
import LoginQuote from 'components/Registration/RegistrationQuote/RegistrationQuote';

const LoginPage = () => {
  return (
    <>
    <LoginPageContent />
    <LoginQuote />
      {/* <SignInForm /> */}
    </>
  );
};

export default LoginPage;

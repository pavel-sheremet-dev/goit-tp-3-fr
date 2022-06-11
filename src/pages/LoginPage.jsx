import SignInForm from 'components/auth/SignInForm';
import LoginPageContent from 'components/login/LoginPageContent/LoginPageContent';
import LoginQuote from 'components/login/LoginQuote/LoginQuote';

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

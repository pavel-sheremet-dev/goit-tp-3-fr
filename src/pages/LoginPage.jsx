import LoginPageContant from '../components/login/LoginPageContant/LoginPageContant';
import LoginQuote from '../components/login/LoginQuote/LoginQuote';
import { StyledLoginPage } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <LoginPageContant />
      <LoginQuote />
    </StyledLoginPage>
  );
};

export default LoginPage;

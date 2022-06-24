import AuthorQuote from 'components/auth/authorQuote/AuthorQuote';

import SignIn from 'components/auth/signIn/SignIn';
import { MainStyled } from './registrationPage/RegistrationPage.styled';

const LoginPage = () => {
  return (
    <MainStyled>
      <SignIn />
      <AuthorQuote />
    </MainStyled>
  );
};

export default LoginPage;

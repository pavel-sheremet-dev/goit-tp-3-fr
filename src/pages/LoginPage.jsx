import { useContext } from 'react';
import { PageFormatContext } from 'context/pageFormatContext';
import LoginPageContant from '../components/login/LoginPageContant/LoginPageContant';
import LoginQuote from '../components/login/LoginQuote/LoginQuote';
import { StyledLoginPage } from './LoginPage.styled';


const LoginPage = () => {
  // const pageFormat = useContext(PageFormatContext);

  return (

      <StyledLoginPage>
        <LoginPageContant />
        <LoginQuote />
      </StyledLoginPage>
  
  );
};

export default LoginPage;

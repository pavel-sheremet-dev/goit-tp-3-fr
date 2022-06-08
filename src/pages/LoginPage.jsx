import { useContext } from 'react';
import { PageFormatContext } from 'context/pageFormatContext';
import LoginPageContant from '../components/login/LoginPageContant/LoginPageContant';
import LoginQuote from '../components/login/LoginQuote/LoginQuote';


const LoginPage = () => {
  // const pageFormat = useContext(PageFormatContext);

  return (
    <>
      <LoginPageContant />
      <LoginQuote />
    </>
  );
};

export default LoginPage;

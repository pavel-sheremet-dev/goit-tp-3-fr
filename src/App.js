import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { getCssVars } from 'styles/vars';
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import MainComponent from 'components/main/MainComponent';
import { Loader } from 'components/Loader/Loader';

const App = () => {
  const dispatch = useDispatch();

  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <div>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          {isLoadingUser ? (
            <Loader />
          ) : (
            <>
              <Header />
              <MainComponent />
            </>
          )}
          {/* <Main /> */}
          <ToastContainer position="top-center" autoClose={4000} />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;

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
import { useRef } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const firstLoading = useRef(true);

  useEffect(() => {
    if (firstLoading.current) {
      firstLoading.current = false;
      return;
    }
  }, []);

  const isLoadingUser = useSelector(authSelectors.getLoadingUser);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          {isLoadingUser || firstLoading.current ? (
            <Loader />
          ) : (
            <>
              <Header />
              <MainComponent />
            </>
          )}
          <ToastContainer position="top-center" autoClose={4000} />
          <div className="body-frame"></div>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;

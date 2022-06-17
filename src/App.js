import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef } from 'react';

import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from 'styles/GlobalStyles';
import { getCssVars } from 'styles/vars';
import { Loader } from 'components/common/Loader/Loader';

import Layout from 'components/common/layout/Layout';
import Meta from 'components/common/helmet/Meta';
import Header from 'components/header/Header';
import MainComponent from 'components/main/MainComponent';

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
        <HelmetProvider>
          <Layout>
            <GlobalStyle />
            <Meta />
            {isLoadingUser || firstLoading.current ? (
              <Loader />
            ) : (
              <>
                <Header />
                <MainComponent />
              </>
            )}
            <ToastContainer position="top-center" autoClose={4000} />
          </Layout>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

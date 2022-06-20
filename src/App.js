import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { GlobalStyle } from 'styles/GlobalStyles';

import { ToastContainer } from 'react-toastify';
import Header from 'components/header/Header';
import Meta from 'components/common/helmet/Meta';
import Layout from 'components/common/layout/Layout';
import MainComponent from 'components/main/MainComponent';
import { Loader } from 'components/common/loader/Loader';

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
    </>
  );
};

export default App;

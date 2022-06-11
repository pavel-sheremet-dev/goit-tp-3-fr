import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { getCssVars } from 'styles/vars';
import Header from 'components/header/Header';
import Layout from 'components/layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { routes } from 'routes';
import AuthRoute from 'routes/AuthRoute';
import NotAuthRoute from 'routes/NotAuthRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Modal from 'components/Modal/Modal';
import RatingModal from 'components/RatingModal/RatingModal';
import { useState } from 'react';

const { signUp, login, training, library, verificate } = routes.routes;

const LibraryPage = lazy(() =>
  import('./pages/LibraryPage' /* webpackChunkName: "LibraryPage" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const NotFoundPage = lazy(() =>
  import('./pages/NotFoundPage' /* webpackChunkName: "LoginPage" */),
);
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage' /* webpackChunkName: "RegistrationPage" */),
);
const TrainingPage = lazy(() =>
  import('./pages/TrainingPage' /* webpackChunkName: "TrainingPage" */),
);
const VerificatePage = lazy(() =>
  import('./pages/VerificatePage' /* webpackChunkName: "TrainingPage" */),
);

const App = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <div>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          <Header />
          <main>
            <Suspense fallback={<Loader />}>
              <Routes>
                {/* PUBLIC */}
                <Route path={verificate.path} element={<VerificatePage />} />

                {/* NOT AUTH */}
                <Route
                  index={login.path}
                  element={
                    <NotAuthRoute redirectPath={library.absolutePath}>
                      <LoginPage />
                    </NotAuthRoute>
                  }
                />
                <Route
                  path={signUp.path}
                  element={
                    <NotAuthRoute redirectPath={library.absolutePath}>
                      <RegistrationPage />
                    </NotAuthRoute>
                  }
                />

                {/* PRIVATE */}

                <Route
                  path={library.path}
                  element={
                    <AuthRoute redirectPath={login.absolutePath}>
                      <LibraryPage />
                    </AuthRoute>
                  }
                />

                <Route
                  path={training.path}
                  element={
                    <AuthRoute redirectPath={login.absolutePath}>
                      <TrainingPage />
                    </AuthRoute>
                  }
                />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          {/* <Main /> */}
          {showModal && (
            <Modal onClose={toggleModal}>
              <RatingModal onClose={toggleModal} />
            </Modal>
          )}
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;

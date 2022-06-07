import { GlobalStyle } from 'styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { getCssVars } from 'styles/vars';
import Header from 'components/header/Header';
import Main from 'components/main/Main';
import Layout from 'components/layout/Layout';
import Example from 'components/Example';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'routes/PublicRoute/PublicRoute';
import PrivateRoute from 'routes/PrivateRoute/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import { routes } from 'routes';
const { signUp, login, training, library } = routes.routes;
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

const App = () => {
  return (
    <div>
      <ThemeProvider theme={getCssVars()}>
        <Layout>
          <GlobalStyle />
          <Header />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route
                index={signUp.absolutePath}
                element={
                  <PublicRoute restricted>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path={login.absolutePath}
                element={
                  <PublicRoute redirectTo={library.absolutePath} restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />

              <Route
                path={training.absolutePath}
                element={
                  <PrivateRoute>
                    <TrainingPage />
                  </PrivateRoute>
                }
              />

              {
                <Route
                  path={library.absolutePath}
                  element={
                    <PrivateRoute>
                      <LibraryPage />
                    </PrivateRoute>
                  }
                />
              }

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Main />
          <Example />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;

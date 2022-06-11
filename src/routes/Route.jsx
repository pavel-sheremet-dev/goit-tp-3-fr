import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { routes } from 'routes';
import AuthRoute from 'routes/AuthRoute';
import NotAuthRoute from 'routes/NotAuthRoute';

const { signUp, login, training, library, verificate } = routes.routes;

const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const NotFoundPage = lazy(() =>
  import('pages/NotFoundPage' /* webpackChunkName: "LoginPage" */),
);
const RegistrationPage = lazy(() =>
  import('pages/RegistrationPage' /* webpackChunkName: "RegistrationPage" */),
);
const LibraryPage = lazy(() =>
  import('pages/LibraryPage' /* webpackChunkName: "LibraryPage" */),
);
const TrainingPage = lazy(() =>
  import('pages/TrainingPage' /* webpackChunkName: "TrainingPage" */),
);
const VerificatePage = lazy(() =>
  import('pages/VerificatePage' /* webpackChunkName: "TrainingPage" */),
);

const RoutesComponent = () => {
  return (
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
  );
};

export default RoutesComponent;

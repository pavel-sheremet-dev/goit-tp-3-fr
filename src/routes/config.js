export const routes = {
  signUp: {
    id: 1,
    title: 'Registration',
    path: 'signup',
    absolutePath: '/signup',
  },
  login: {
    id: 2,
    title: 'Login',
    path: '/',
    absolutePath: '/',
  },

  training: {
    id: 3,
    title: 'Training',
    path: 'training',
    absolutePath: '/training',
  },
  library: {
    id: 4,
    title: 'Library',
    path: 'library',
    absolutePath: '/library',
  },
  verificate: {
    id: 5,
    title: 'Verification',
    path: 'api/users/verify',
    absolutePath: '/api/users/verify',
  },
};

export const dinamic = {
  id: {
    title: 'verify',
    path: ':movieId',
  },
};

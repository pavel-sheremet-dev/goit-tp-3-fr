const statusSignupMapping = {
  400: 'Здається, ви щось запровадили неправильно. Спробуйте ще раз.',
  409: 'Користувач з такою електронною поштою вже зареєстрований.',
};

const statusLoginMapping = {
  403: 'Ви ввели неправильний логін або пароль.',
  404: 'Такий користувач не зареєстровано.',
  412: 'Ви не підтвердили реєстрацію. Будь ласка, перевірте пошту в папці вхідні або папку спам.',
};

export const getLoginError = (status, defaultMessage) =>
  statusLoginMapping[status] || defaultMessage;

export const getSignupError = (status, defaultMessage) =>
  statusSignupMapping[status] || defaultMessage;

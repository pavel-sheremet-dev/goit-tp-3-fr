const signupErrorMessages = {
  400: 'Здається, щось було вказано не вірно. Спробуйте, будь ласка, ще раз.',
  409: 'Користувач з такою електронною поштою вже зареєстрований.',
};

const loginErrorMessages = {
  403: 'Ви ввели неправильний логін або пароль.',
  404: 'Такого користувача не зареєстровано.',
  412: 'Ви не підтвердили реєстрацію. Будь ласка, перевірте пошту в папці вхідні або папку спам.',
};

const addBookErrorMessages = {
  409: 'Така книга вже є.',
};

const booksErrorMessages = {
  404: 'Книги не знайдено.',
};

const reviewErrorMessages = {
  404: 'Книги не знайдено.',
  409: 'Ви ще не прочитали цієї книги.',
};

const trainingErrorMessages = {
  404: 'У вас немає активного тренування.',
};

const getTextError = errors => status =>
  errors[status] || 'Упс, щось пішло не так, спробуйте повторити пізніше :)';

export const getSignupError = getTextError(signupErrorMessages);
export const getLoginError = getTextError(loginErrorMessages);
export const getAddBookError = getTextError(addBookErrorMessages);
export const getBooksError = getTextError(booksErrorMessages);
export const getReviewError = getTextError(reviewErrorMessages);
export const getTrainingError = getTextError(trainingErrorMessages);

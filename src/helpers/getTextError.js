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

const signupErrorMessagesEN = {
  400: 'It seems that something was said incorrectly. Please try again.',
  409: 'A user with this email is already registered',
};

const loginErrorMessagesEN = {
  403: 'You have entered an incorrect login or password.',
  404: 'No such user registered.',
  412: 'You have not confirmed your registration. Please check your inbox or spam folder.',
};

const addBookErrorMessagesEN = {
  409: 'Such a book already exists.',
};

const booksErrorMessagesEN = {
  404: 'No books found.',
};

const reviewErrorMessagesEN = {
  404: 'No books found.',
  409: 'You have not read this book yet.',
};

const trainingErrorMessagesEN = {
  404: 'You do not have an active training.',
};

const getTextError = errors => status =>
  errors[status] || 'Упс, щось пішло не так, спробуйте повторити пізніше :)';

export const getSignupError = getTextError(signupErrorMessages);
export const getLoginError = getTextError(loginErrorMessages);
export const getAddBookError = getTextError(addBookErrorMessages);
export const getBooksError = getTextError(booksErrorMessages);
export const getReviewError = getTextError(reviewErrorMessages);
export const getTrainingError = getTextError(trainingErrorMessages);

export const getSignupErrorEN = getTextError(signupErrorMessagesEN);
export const getLoginErrorEN = getTextError(loginErrorMessagesEN);
export const getAddBookErrorEN = getTextError(addBookErrorMessagesEN);
export const getBooksErrorEN = getTextError(booksErrorMessagesEN);
export const getReviewErrorEN = getTextError(reviewErrorMessagesEN);
export const getTrainingErrorEN = getTextError(trainingErrorMessagesEN);

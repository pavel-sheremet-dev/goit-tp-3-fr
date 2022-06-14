import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email('Введіть електронну пошту в форматі your@email.com')
    .min(7)
    .max(63)
    .email()
    .required('Необхідно заповнити поле')
    .typeError('Введіть електронну пошту в форматі your@email.com'),

  password: Yup.string()
    .min(5)
    .max(30)
    .required('Необхідно заповнити поле')
    .typeError('Поле може містити літери латиниці, цифри та знаки'),
});

export const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Необхідно заповнити поле*';
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email = 'Електронна пошта повинна містити від 7 до 63 символів';
  }

  if (!values.password) {
    errors.password = 'Необхідно заповнити поле*';
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password = 'Пароль має бути від 5 до 30 символів';
  }

  return errors;
};

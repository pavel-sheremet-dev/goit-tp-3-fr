import * as Yup from 'yup';

export const validationRegistrationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(100)
    .required('Необхідно заповнити поле')
    .typeError('Поле може містити від 3 до 100 символів включно'),

  email: Yup.string()
    .email('Введіть електронну пошту в форматі your@email.com')
    .min(7)
    .max(63)
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      'Введіть коректну електронну пошту',
    )
    .required('Необхідно заповнити поле')
    .typeError('Введіть електронну пошту в форматі your@email.com'),

  password: Yup.string()
    .min(5)
    .max(30)
    .matches(
      /^[0-9a-zA-Z_\s'’ʼ-]{5,30}$/,
      'Пароль має бути від 5 до 30 символів',
    )
    .required('Необхідно заповнити поле')
    .typeError('Поле може містити літери латиниці, цифри та знаки'),

  repassword: Yup.string()
    .min(5)
    .max(30)
    .matches(
      /^[0-9a-zA-Z_\s'’ʼ-]{5,30}$/,
      'Пароль має бути від 5 до 30 символів',
    )
    .required('Необхідно заповнити поле')
    .typeError('Дані відрізняються від даних поля пароль'),
});

export const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Необхідно заповнити поле*';
  } else if (values.name.length < 3 || values.name.length > 100) {
    errors.name = 'Поле може містити від 3 до 100 символів включно';
  } else if (values.name.startsWith(' ')) {
    errors.name = 'Поле може починатися тільки з літери';
  }

  if (!values.email) {
    errors.email = 'Необхідно заповнити поле*';
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email = 'Поле може містити від 7 до 63 символів включно';
  }

  if (!values.password) {
    errors.password = 'Необхідно заповнити поле*';
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password = 'Поле може містити від 5 до 30 символів включно';
  }

  if (!values.repassword) {
    errors.repassword = 'Необхідно заповнити поле*';
  } else if (values.repassword !== values.password) {
    errors.repassword = 'Дані відрізняються від даних поля пароль';
  }
  return errors;
};

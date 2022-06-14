import * as Yup from 'yup';

export const validationRegistrationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(100)
    .required('Необхідно заповнити поле')
    .typeError('Поле може починатися з літери або цифри'),

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

  repassword: Yup.string()
    .min(5)
    .max(30)
    .required('Необхідно заповнити поле')
    .typeError('Дані відрізняються від даних поля пароль'),
});

export const validate = values => {
  const reg = new RegExp('[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]');
  const сyrillic = new RegExp('[А-Яа-яґҐЁёІіЇїЄє]');

  const errors = {};
  if (!values.name) {
    errors.name = 'Необхідно заповнити поле*';
  } else if (values.name.length < 2 || values.name.length > 99) {
    errors.name = 'Поле може містити від 3 до 100 символів включно';
  } else if (!reg.test(values.name[0])) {
    errors.name = 'Поле може починатися з літери або цифри';
  }

  if (!values.email) {
    errors.email = 'Необхідно заповнити поле*';
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email = 'Поле може містити від 7 до 63 символів включно';
  } else if (values.email.startsWith('-') || values.email.slice(-1) === '-') {
    errors.email = 'Поле не може починатися з дефісу або закінчуватися дефісом';
  } else if (сyrillic.test(values.email)) {
    errors.email = 'Поле може містити літери латиниці, цифри та знаки';
  }

  if (!values.password) {
    errors.password = 'Необхідно заповнити поле*';
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password = 'Поле може містити від 5 до 30 символів включно';
  } else if (
    values.password.startsWith('-') ||
    values.password.startsWith('.') ||
    сyrillic.test(values.password)
  ) {
    errors.password = 'Поле може містити літери латиниці, цифри та знаки';
  }

  if (!values.repassword) {
    errors.repassword = 'Необхідно заповнити поле*';
  } else if (values.repassword !== values.password) {
    errors.repassword = 'Дані відрізняються від даних поля пароль';
  }
  return errors;
};

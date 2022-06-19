import * as Yup from 'yup';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

const lngs = {
  email: {
    en: 'Enter your email in the format your@email.com',
    ua: 'Введіть електронну пошту в форматі your@email.com',
  },
  required: {
    en: 'Required field',
    ua: 'Необхідно заповнити поле',
  },
  password: {
    en: 'Field can contain Latin letters, numbers and symbols',
    ua: 'Поле може містити літери латиниці, цифри та знаки',
  },
  passwordLength: {
    en: 'The password must be between 5 and 30 characters long',
    ua: 'Пароль має бути від 5 до 30 символів',
  },
  emailLength: {
    en: 'Email must be between 7 and 63 characters long',
    ua: 'Електронна пошта повинна містити від 7 до 63 символів',
  },
  nameLength: {
    en: 'Name must be between 3 and 100 characters long',
    ua: 'Поле може містити від 3 до 100 символів включно',
  },
  start: {
    en: 'Field can start with a letter or number',
    ua: 'Поле може починатися з літери або цифри',
  },
  different: {
    en: 'Data is different from password field data',
    ua: 'Дані відрізняються від даних поля пароль',
  },
  hyphen: {
    en: 'Field cannot start with a hyphen or end with a hyphen',
    ua: 'Поле не може починатися з дефісу або закінчуватися дефісом',
  },
};

export const validationRegistrationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(100)
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk' ? lngs.start.ua : lngs.start.en,
    ),

  email: Yup.string()
    .email(language.resolvedLanguage === 'uk' ? lngs.email.ua : lngs.email.en)
    .min(7)
    .max(63)
    .email()
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk' ? lngs.email.ua : lngs.email.en,
    ),

  password: Yup.string()
    .min(5)
    .max(30)
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk' ? lngs.password.ua : lngs.password.en,
    ),

  repassword: Yup.string()
    .min(5)
    .max(30)
    .required(
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en,
    )
    .typeError(
      language.resolvedLanguage === 'uk'
        ? lngs.different.ua
        : lngs.different.en,
    ),
});

export const validate = values => {
  const reg = new RegExp('[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє]');
  const cyrillic = new RegExp('[А-Яа-яґҐЁёІіЇїЄє]');

  const errors = {};
  if (!values.name) {
    errors.name =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.name.length < 2 || values.name.length > 99) {
    errors.name =
      language.resolvedLanguage === 'uk'
        ? lngs.nameLength.ua
        : lngs.nameLength.en;
  } else if (!reg.test(values.name[0])) {
    errors.name =
      language.resolvedLanguage === 'uk' ? lngs.start.ua : lngs.start.en;
  }

  if (!values.email) {
    errors.email =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.email.length < 6 || values.email.length > 62) {
    errors.email =
      language.resolvedLanguage === 'uk'
        ? lngs.emailLength.ua
        : lngs.emailLength.en;
  } else if (values.email.startsWith('-') || values.email.slice(-1) === '-') {
    errors.email =
      language.resolvedLanguage === 'uk' ? lngs.hyphen.ua : lngs.hyphen.en;
  } else if (cyrillic.test(values.email)) {
    errors.email =
      language.resolvedLanguage === 'uk' ? lngs.password.ua : lngs.password.en;
  }

  if (!values.password) {
    errors.password =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.password.length < 4 || values.password.length > 29) {
    errors.password =
      language.resolvedLanguage === 'uk'
        ? lngs.passwordLength.ua
        : lngs.passwordLength.en;
  } else if (
    values.password.startsWith('-') ||
    values.password.startsWith('.') ||
    cyrillic.test(values.password)
  ) {
    errors.password =
      language.resolvedLanguage === 'uk' ? lngs.password.ua : lngs.password.en;
  }

  if (!values.repassword) {
    errors.repassword =
      language.resolvedLanguage === 'uk' ? lngs.required.ua : lngs.required.en;
  } else if (values.repassword !== values.password) {
    errors.repassword =
      language.resolvedLanguage === 'uk'
        ? lngs.different.ua
        : lngs.different.en;
  }
  return errors;
};

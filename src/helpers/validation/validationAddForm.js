import * as Yup from 'yup';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const language = i18next.use(LanguageDetector);

export const validationAddFormSchema = Yup.object({
  name: Yup.string()
    .min(1)
    .max(50)
    .required(
      language.resolvedLanguage === 'uk'
        ? 'Це обов‘язкове поле'
        : 'This is a required field',
    )
    .typeError(
      language.resolvedLanguage === 'uk'
        ? 'Має бути рядок'
        : 'There must be a string',
    ),
  author: Yup.string()
    .min(1)
    .max(50)
    .required(
      language.resolvedLanguage === 'uk'
        ? 'Це обов‘язкове поле'
        : 'This is a required field',
    )
    .typeError(
      language.resolvedLanguage === 'uk'
        ? 'Має бути рядок'
        : 'There must be a string',
    ),
  year: Yup.number()
    .integer()
    .required(
      language.resolvedLanguage === 'uk'
        ? 'Це обов‘язкове поле'
        : 'This is a required field',
    )
    .typeError(
      language.resolvedLanguage === 'uk'
        ? 'Може містити лише цифри'
        : 'Can contain only numbers',
    ),
  pages: Yup.number()
    .min(
      1,
      language.resolvedLanguage === 'uk'
        ? 'Мінімум 1 сторінка'
        : 'At least 1 page',
    )
    .required(
      language.resolvedLanguage === 'uk'
        ? 'Це обов‘язкове поле'
        : 'This is a required field',
    )
    .typeError(
      language.resolvedLanguage === 'uk'
        ? 'Може містити лише цифри'
        : 'Can contain only numbers',
    ),
});

export const validateForm = values => {
  let errors = {};
  const today = new Date();
  const date = today.getFullYear();

  if (values.name === ' ' || values.name === '-') {
    errors.name =
      language.resolvedLanguage === 'uk'
        ? 'Поле не може починатися з пробілу або дефісу'
        : 'The field cannot start with a space or a hyphen';
  } else if (values.name.startsWith(' ') || values.name.startsWith('-')) {
    errors.name =
      language.resolvedLanguage === 'uk'
        ? 'Поле не може починатися з пробілу або дефісу'
        : 'The field cannot start with a space or a hyphen';
  } else if (Number(values.author) || /\d/.test(values.author)) {
    errors.author =
      language.resolvedLanguage === 'uk'
        ? 'Поле не може містити в собі цифри'
        : 'The field cannot contain numbers';
  } else if (values.author === ' ' || values.author === '-') {
    errors.author =
      language.resolvedLanguage === 'uk'
        ? 'Поле не може починатися з пробілу або дефісу'
        : 'The field cannot start with a space or a hyphen';
  } else if (values.author.startsWith(' ') || values.author.startsWith('-')) {
    errors.author =
      language.resolvedLanguage === 'uk'
        ? 'Поле не може починатися з пробілу або дефісу'
        : 'The field cannot start with a space or a hyphen';
  } else if (values.year > date) {
    errors.year =
      language.resolvedLanguage === 'uk'
        ? 'Рік не повинен бути майбутнім'
        : 'The year should not be the future';
  } else if (values.year.length <= 3) {
    errors.year =
      language.resolvedLanguage === 'uk'
        ? 'Рік має складатися з 4 цифр'
        : 'The year must consist of 4 digits';
  } else if (values.year.startsWith(0)) {
    errors.year =
      language.resolvedLanguage === 'uk'
        ? 'Рік не може починатися із 0'
        : 'The year cannot start with 0';
  } else if (values.pages.startsWith(0)) {
    errors.pages =
      language.resolvedLanguage === 'uk'
        ? 'Кількість сторінок не може починатися із 0'
        : 'Number of pages cannot start with 0';
  }
  return errors;
};

export const isValidNumberInputRegex = new RegExp('[0-9]');
export const isValidNameInputRegex = new RegExp(
  `[0-9A-Za-zА-Яа-яґҐЁёІіЇїЄє.,:"'’ʼ\\s-]`,
);

export const normalizeNumber = (value, regexp) => {
  return value
    .split('')
    .filter((item, id) => (!id && !Number(item) ? false : regexp.test(item)))
    .join('');
};

export const normalizeTexValues = (value, regexp) => {
  return value
    .split('')
    .filter(item => regexp.test(item))
    .join('');
};

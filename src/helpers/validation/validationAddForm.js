import * as Yup from 'yup';

export const validationAddFormSchema = Yup.object({
  name: Yup.string()
    .min(1)
    .max(50)
    .required('Це обов‘язкове поле')
    .typeError('Має бути рядок'),
  author: Yup.string()
    .min(1)
    .required('Це обов‘язкове поле')
    .typeError('Має бути рядок'),
  year: Yup.number()
    .integer()
    .required('Це обов‘язкове поле')
    .typeError('Може містити лише цифри'),
  pages: Yup.number()
    .min(1, 'Мінімум 1 сторінка')
    .required('Це обов‘язкове поле')
    .typeError('Може містити лише цифри'),
});

export const validateForm = values => {
  let errors = {};
  const today = new Date();
  const date = today.getFullYear();

  if (values.name === ' ' || values.name === '-') {
    errors.name = 'Поле не може починатися з пробілу або дефісу';
  } else if (values.name.startsWith(' ') || values.name.startsWith('-')) {
    errors.name = 'Поле не може починатися з пробілу або дефісу';
  } else if (Number(values.author) || /\d/.test(values.author)) {
    errors.author = 'Поле не може містити в собі цифри';
  } else if (values.author === ' ' || values.author === '-') {
    errors.author = 'Поле не може починатися з пробілу або дефісу';
  } else if (values.author.startsWith(' ') || values.author.startsWith('-')) {
    errors.author = 'Поле не може починатися з пробілу або дефісу';
  } else if (values.year > date) {
    errors.year = 'Рік не повинен бути майбутнім';
  } else if (values.year.length <= 3) {
    errors.year = 'Рік повинен складатися з 4 цифр';
  } else if (values.year.startsWith(0)) {
    errors.year = 'Рік не може починатися із 0';
  } else if (values.pages.startsWith(0)) {
    errors.pages = 'Кількість сторінок не може починатися із 0';
  }
  return errors;
};

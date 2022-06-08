import * as Yup from 'yup';

export const validationAddFormSchema = Yup.object({
  title: Yup.string()
    .min(1)
    .max(50)
    .required('Title is required')
    .typeError('Must be a string.'),
  author: Yup.string()
    .min(1)
    .required('Author is required')
    .typeError('Must be a string.'),
  year: Yup.number()
    .integer()
    .required('Year is required')
    .typeError('Must be a number.'),
  pages: Yup.number()
    .min(1, 'Minimum 1 page')
    .required('Pages are required')
    .typeError('Must be a number.'),
});

export const validateForm = values => {
  let errors = {};
  const today = new Date();
  const date = today.getFullYear();

  if (values.title === ' ' || values.title === '-') {
    errors.title = 'The field should not start with a space or hyphen';
  } else if (Number(values.author) || /\d/.test(values.author)) {
    errors.author = 'The field should not contain number';
  } else if (values.author === ' ' || values.author === '-') {
    errors.author = 'The field should not start with a space or hyphen';
  } else if (values.year > date) {
    errors.year = 'The year should not a future';
  }
  return errors;
};

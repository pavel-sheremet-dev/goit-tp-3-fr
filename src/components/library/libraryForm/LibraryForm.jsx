import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from 'redux/books/books-operations';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  validationAddFormSchema,
  validateForm,
  normalizeNumber,
  isValidNumberInputRegex,
} from 'helpers/validation/validationAddForm';

import {
  Form,
  TitleLabel,
  AuthorLabel,
  Label,
  Input,
  Button,
  ErrorContainer,
} from './LibraryForm.styled';

const getDataFromLS = key => sessionStorage.getItem(key) ?? '';

const getInitialObject = initObj => {
  return Object.keys(initObj).reduce(
    (acc, item) => ({ ...acc, [item]: getDataFromLS(`add-book-${item}`) }),
    {},
  );
};

const removeValuesFromLS = initObj => {
  Object.keys(initObj).forEach(item =>
    sessionStorage.removeItem(`add-book-${item}`),
  );
};

const initBook = {
  name: '',
  author: '',
  year: '',
  pages: '',
};

const LibraryMobileForm = ({ isArrayFull, style, closeForm }) => {
  const { t } = useTranslation();
  const [initialValues, setInitialValues] = useState(() =>
    getInitialObject(initBook),
  );

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues,
    validationSchema: validationAddFormSchema,
    validate: validateForm,
    onSubmit: (values, { resetForm }) => {
      const { name, author, year, pages } = values;
      dispatch(addBook({ name, author, year, pages }));
      resetForm();
      setInitialValues(initBook);
      removeValuesFromLS(initBook);
      closeForm(false);
    },
    enableReinitialize: true,
  });

  const handleChange = e => {
    sessionStorage.setItem(`add-book-${e.target.id}`, e.target.value);
    formik.handleChange(e);
  };

  return (
    <Form onSubmit={formik.handleSubmit} isarray={isArrayFull} style={style}>
      <TitleLabel>
        <span>{t('title')}</span>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="..."
          value={formik.values.name}
          onChange={handleChange}
        />
        {formik.touched.name && formik.errors.name ? (
          <ErrorContainer>{formik.errors.name}</ErrorContainer>
        ) : null}
      </TitleLabel>

      <AuthorLabel>
        <span>{t('bookAuthor')}</span>
        <Input
          id="author"
          name="author"
          type="text"
          placeholder="..."
          value={formik.values.author}
          onChange={handleChange}
        />
        {formik.touched.author && formik.errors.author ? (
          <ErrorContainer>{formik.errors.author}</ErrorContainer>
        ) : null}
      </AuthorLabel>

      <Label>
        <span>{t('publication')}</span>
        <Input
          id="year"
          name="year"
          type="text"
          placeholder="..."
          maxLength="4"
          value={normalizeNumber(formik.values.year, isValidNumberInputRegex)}
          onChange={handleChange}
        />
        {formik.touched.year && formik.errors.year ? (
          <ErrorContainer>{formik.errors.year}</ErrorContainer>
        ) : null}
      </Label>

      <Label>
        <span>{t('amountOfPages')}</span>
        <Input
          id="pages"
          name="pages"
          type="text"
          placeholder="..."
          maxLength="4"
          value={normalizeNumber(formik.values.pages, isValidNumberInputRegex)}
          onChange={handleChange}
        />
        {formik.touched.pages && formik.errors.pages ? (
          <ErrorContainer>{formik.errors.pages}</ErrorContainer>
        ) : null}
      </Label>

      <Button type="submit">{t('addBook')}</Button>
    </Form>
  );
};

export default LibraryMobileForm;

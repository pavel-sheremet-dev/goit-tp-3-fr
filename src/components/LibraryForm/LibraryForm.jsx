import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Section from '../common/section/Section'
import addBook from 'redux/books/books-actions';
import {
  validationAddFormSchema,
  validateForm,
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

const LibraryMobileForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      year: '',
      pages: '',
    },
    validationSchema: validationAddFormSchema,
    validate: validateForm,
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));

      const { title, author, year, pages } = values;
      dispatch(addBook({ title, author, year, pages }));
      resetForm();
    },
  });

  return (
    <Section title={'Library Form'} titleLevel={'h2'} isHidden>
    <Form onSubmit={formik.handleSubmit}>
      <TitleLabel>
        <span>Назва книги</span>
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="..."
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.touched.title && formik.errors.title ? (
          <ErrorContainer>{formik.errors.title}</ErrorContainer>
        ) : null}
      </TitleLabel>

      <AuthorLabel>
        <span>Автор книги</span>
        <Input
          id="author"
          name="author"
          type="text"
          placeholder="..."
          value={formik.values.author}
          onChange={formik.handleChange}
        />
        {formik.touched.author && formik.errors.author ? (
          <ErrorContainer>{formik.errors.author}</ErrorContainer>
        ) : null}
      </AuthorLabel>

      <Label>
        <span>Рік випуску</span>
        <Input
          id="year"
          name="year"
          type="text"
          placeholder="..."
          maxLength="4"
          value={formik.values.year}
          onChange={formik.handleChange}
        />
        {formik.touched.year && formik.errors.year ? (
          <ErrorContainer>{formik.errors.year}</ErrorContainer>
        ) : null}
      </Label>

      <Label>
        <span>Кількість сторінок</span>
        <Input
          id="pages"
          name="pages"
          type="text"
          placeholder="..."
          maxLength="4"
          value={formik.values.pages}
          onChange={formik.handleChange}
        />
        {formik.touched.pages && formik.errors.pages ? (
          <ErrorContainer>{formik.errors.pages}</ErrorContainer>
        ) : null}
      </Label>

      <Button type="submit">Додати</Button>
      </Form>
      </Section>
  );
};

export default LibraryMobileForm;

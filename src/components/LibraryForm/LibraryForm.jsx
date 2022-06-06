import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import Section from '../common/section/Section';
import addBook from 'redux/books/books-actions';
import {
  validationAddFormSchema,
  validateForm,
} from 'helpers/validation/validationAddForm';

import {
  Form,
  Label,
  LabelCount,
  Input,
  InputTitle,
  InputAuthor,
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
        <Label>
          Назва книги
          {formik.touched.title && formik.errors.title ? (
            <ErrorContainer>{formik.errors.title}</ErrorContainer>
          ) : null}
          <InputTitle
            id="title"
            name="title"
            type="text"
            placeholder="..."
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Label>

        <Label>
          Автор книги
          {formik.touched.author && formik.errors.author ? (
            <ErrorContainer>{formik.errors.author}</ErrorContainer>
          ) : null}
          <InputAuthor
            id="author"
            name="author"
            type="text"
            placeholder="..."
            value={formik.values.author}
            onChange={formik.handleChange}
          />
        </Label>

        <LabelCount>
          Рік випуску
          {formik.touched.year && formik.errors.year ? (
            <ErrorContainer>{formik.errors.year}</ErrorContainer>
          ) : null}
          <Input
            id="year"
            name="year"
            type="text"
            placeholder="..."
            maxLength="4"
            value={formik.values.year}
            onChange={formik.handleChange}
          />
        </LabelCount>

        <LabelCount>
          Кількість сторінок
          {formik.touched.pages && formik.errors.pages ? (
            <ErrorContainer>{formik.errors.pages}</ErrorContainer>
          ) : null}
          <Input
            id="pages"
            name="pages"
            type="text"
            placeholder="..."
            maxLength="4"
            value={formik.values.pages}
            onChange={formik.handleChange}
          />
        </LabelCount>

        <Button type="submit">Додати</Button>
      </Form>
    </Section>
  );
};

export default LibraryMobileForm;

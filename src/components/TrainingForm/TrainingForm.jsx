import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';

import DateTimeInput from './DateTime/DateTime';
import SelectBook from './SelectBook/SelectBook';
import { addTraining } from 'redux/training/training-slice';
import TrainingList from '../TrainingList/TrainingList';

import {
  Wrapper,
  Form,
  Title,
  InputWrapper,
  ErrorContainer,
  WrapperTrainingList,
  Button,
} from './TrainingForm.styled';

const booksList = [
  {
    _id: '62a21382a6468598d2c0f0f7',
    name: 'Дюна',
    author: 'Френк Герберт',
    year: 1965,
    pages: 656,
    status: 'unread',
  },
  {
    _id: '62a21314a6468598d2c0f0f0',
    name: 'Маленький принц',
    author: 'Антуант де Сент-Екзюпері',
    year: 1943,
    pages: 160,
    status: 'unread',
  },
  {
    _id: '629ce5f830f87f7fb279b2a0',
    name: 'Жінка, яка має план',
    author: 'Мей Маск',
    year: 2021,
    pages: 224,
    status: 'unread',
  },
  {
    _id: '629ce5f830f87f8fb279b2a1',
    name: '11/22/63',
    author: 'Стівен Кінг',
    year: 2011,
    pages: 976,
    status: 'unread',
  },
  {
    _id: '629ce5f860f87f7fb279b2a2',
    name: 'Ігри, у які грають люди',
    author: 'Ерік Берн',
    year: 2016,
    pages: 256,
    status: 'unread',
  },
  {
    _id: '629ce5f830f87f7fс279b2a3',
    name: 'Правда про справу Гаррі Квеберта',
    author: 'Жоель Діккер',
    year: 2017,
    pages: 704,
    status: 'unread',
  },
];

const TrainingForm = () => {
  const [initialBook, setInitialBook] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setInitialBook(booksList);
  }, []);

  const formik = useFormik({
    initialValues: {
      startDate: '',
      deadlineDate: '',
      books: initialBook,
    },
    onSubmit: (values) => {
      const { startDate, deadlineDate, books } = values;
      dispatch(addTraining({ startDate, deadlineDate, books }));
console.log(books)
    },
    enableReinitialize: true,
  });

  const handleStartDate = date => {
    const startDate = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('startDate', startDate);
  };

  const handleDeadlineDate = date => {
    const deadlineDate = moment(date).format('YYYY-MM-DD');
    formik.setFieldValue('deadlineDate', deadlineDate);
  };

  const handleBook = books => {
    formik.setFieldValue('books', books);
  };

  return (
    <Wrapper>
      <Title>Моє тренування</Title>
      <Form onSubmit={formik.handleSubmit} autoComplete="off">
        <InputWrapper>
          <DateTimeInput
            name="startDate"
            selectedDate={formik.values.startDate}
            onChange={handleStartDate}
            placeholderText="Початок"
          />

          {formik.touched.startDate && formik.errors.startDate ? (
            <ErrorContainer>{formik.errors.startDate}</ErrorContainer>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <DateTimeInput
            name="deadLineDate"
            selectedDate={formik.values.deadLineDate}
            onChange={handleDeadlineDate}
            placeholderText="Завершення"
          />
          {formik.touched.deadLineDate && formik.errors.deadLineDate ? (
            <ErrorContainer>{formik.errors.deadLineDate}</ErrorContainer>
          ) : null}
        </InputWrapper>

        <InputWrapper>
          <SelectBook options={booksList} onChange={handleBook} />
        </InputWrapper>

        <WrapperTrainingList>
          <TrainingList />
        </WrapperTrainingList>

        <Button type="submit">Почати тренування</Button>
      </Form>
    </Wrapper>
  );
};

export default TrainingForm;

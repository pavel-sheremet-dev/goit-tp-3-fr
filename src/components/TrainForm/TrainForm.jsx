import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import DateTimeInput from './DateTime/DateTime';
import SelectBook from './SelectBook/SelectBook';
import TrainingList from '../TrainingList/TrainingList';
import { trainingOperations } from 'redux/training';

import {
  Wrapper,
  Form,
  Title,
  InputWrapper,
  WrapperTrainingList,
  ErrorMessage,
  Button,
} from './TrainForm.styled';

const TrainForm = ({ unreadBooks }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksIds, setBooksIds] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    dispatch(trainingOperations.getActiveTraining());
  }, [dispatch]);

  const getBooksIds = id => {
    setBooksIds(state => [...state, id]);
    const books = unreadBooks.filter(book => book.id === id);
    setBooks(prev => [...prev, ...books]);
  };

  const handleUpdateBook = id => {
    setBooksIds(booksIds.filter(bookId => bookId !== id));
    setBooks(books.filter(book => book.id !== id));
  };

  const handleStartDate = date => {
    const normalizedDate = moment(date).format('YYYY-MM-DD');
    setStartDate(normalizedDate);
  };

  const handleDeadlineDate = date => {
    const normalizedDate = moment(date).format('YYYY-MM-DD');
    setDeadlineDate(normalizedDate);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!startDate || !deadlineDate || !books.length) {
      setError(true);
      return;
    }

    dispatch(
      trainingOperations.addTraining({ startDate, deadlineDate, books }),
    );
    resetForm();
  };

  const resetForm = () => {
    setError(false);
    setStartDate('');
    setDeadlineDate('');
    setBooks('');
  };

  return (
    <Wrapper>
      <Title>Моє тренування</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <InputWrapper>
          <DateTimeInput
            name="startDate"
            selectedDate={startDate}
            onChange={handleStartDate}
            placeholderText="Початок"
          />
        </InputWrapper>

        <InputWrapper>
          <DateTimeInput
            name="deadLineDate"
            selectedDate={deadlineDate}
            onChange={handleDeadlineDate}
            placeholderText="Завершення"
          />
        </InputWrapper>

        <InputWrapper>
          <SelectBook
            unreadBooks={unreadBooks}
            getBooksIds={getBooksIds}
            booksIds={booksIds}
          />
          {error && (
            <ErrorMessage>Оберіть дати або книгу з бібліотеки</ErrorMessage>
          )}
        </InputWrapper>

        <WrapperTrainingList>
          <TrainingList books={books} handleUpdateBook={handleUpdateBook} />
        </WrapperTrainingList>

        <Button type="submit">Почати тренування</Button>
      </Form>
    </Wrapper>
  );
};

export default TrainForm;

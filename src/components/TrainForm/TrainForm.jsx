import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DateTimeInput from './DateTime/DateTime';
import SelectBook from './SelectBook/SelectBook';
import TrainingList from '../TrainingList/TrainingList';
import ActiveTrainList from '../ActiveTrainList/ActiveTrainList';
import { trainingSelectors, trainingOperations } from 'redux/training';
import { booksSelectors } from 'redux/books';

import {
  Wrapper,
  Form,
  Title,
  InputWrapper,
  WrapperTrainingList,
  ErrorMessage,
  Button,
} from './TrainForm.styled';

// export const storageKey = 'choose-training-books';

// const getInitialBooks = key => {
//   try {
//     const stringifyInitialBooks = sessionStorage.getItem(key);
//     const initialBooks = JSON.parse(stringifyInitialBooks) ?? [];
//     return initialBooks;
//   } catch (error) {
//     return [];
//   }
// };

const TrainForm = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [books, setBooks] = useState([]);
  // const [books, setBooks] = useState(() => getInitialBooks(storageKey));
  const [booksIds, setBooksIds] = useState([]);
  const [error, setError] = useState('');
  const isValidate = useRef(false);
  const isStatusTraining = useSelector(trainingSelectors.getStatus);
  const unreadBooks = useSelector(booksSelectors.getUnreadBooks);

  useEffect(() => {
    if (!isValidate.current) return;
    if (!startDate) {
      setError('Вкажіть дату початку тренування');
      return;
    }
    if (!deadlineDate) {
      setError('Вкажіть дату завершення тренування');
      return;
    }
    if (!books.length) {
      setError('Оберіть хоча б одну книгу');
      return;
    }
    setError(false);
  }, [books.length, deadlineDate, startDate]);

  // useEffect(() => {
  //   if (!books.length) return

  //   const stringifyBooks = JSON.stringify(books);
  //   sessionStorage.setItem(storageKey, stringifyBooks);
  // }, [books, books.length]);

  const getBooksIds = id => {
    setBooksIds(state => [...state, id]);
    const book = unreadBooks.filter(book => book.id === id);
    setBooks(prev => [...prev, ...book]);
  };

  const handleUpdateBook = id => {
    setBooksIds(booksIds.filter(bookId => bookId !== id));
    setBooks(books.filter(book => book.id !== id));
  };

  const handleStartDate = date => {
    setStartDate(date);
  };

  const handleDeadlineDate = date => {
    setDeadlineDate(date);
  };

  const handleSubmit = e => {
    e.preventDefault();

    isValidate.current = true;
    dispatch(
      trainingOperations.addTraining({ startDate, deadlineDate, books }),
    );
    // sessionStorage.removeItem(storageKey)
    resetForm();
  };

  const resetForm = () => {
    setError(false);
    setStartDate('');
    setDeadlineDate('');
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

        <InputWrapper className="error">
          <SelectBook
            unreadBooks={unreadBooks}
            getBooksIds={getBooksIds}
            booksIds={booksIds}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </InputWrapper>

        <WrapperTrainingList>
          {!isStatusTraining ? (
            <TrainingList books={books} handleUpdateBook={handleUpdateBook} />
          ) : (
            <ActiveTrainList />
          )}
        </WrapperTrainingList>

        {unreadBooks.length === 0 || isStatusTraining ? (
          <Button style={{ display: 'none' }} type="submit">
            Почати тренування
          </Button>
        ) : (
          <Button type="submit">Почати тренування</Button>
        )}
      </Form>
    </Wrapper>
  );
};

export default TrainForm;

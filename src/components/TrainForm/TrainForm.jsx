import React, { useState } from 'react';
import DateTimeInput from './DateTime/DateTime';

import TrainingList from '../TrainingList/TrainingList';

import {
  Wrapper,
  Title,
  InputWrapper,
  WrapperTrainingList,
  Button,
} from './TrainForm.styled';

import { useDispatch } from 'react-redux';
import { addTraining } from 'redux/training/training-slice';
import SelectBook from './SelectBook';

const TrainForm = ({ unreadBooks }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksIds, setBooksIds] = useState([]);
  const [error, setError] = useState(false);

  const getBooksIds = id => {
    setBooksIds(state => [...state, id]);
    const upd = unreadBooks.filter(book => book._id === id);
    setBooks(prev => [...prev, ...upd]);
  };

  const handleUpdateBook = id => {
    setBooksIds(booksIds.filter(bookId => bookId !== id));
    setBooks(books.filter(book => book._id !== id));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!startDate || !deadlineDate || !books.length) {
      setError(true);
      return;
    }
    dispatch(addTraining({ startDate, deadlineDate, books }));
  };

  return (
    <Wrapper>
      <Title>Моє тренування</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <InputWrapper>
          <DateTimeInput
            name="startDate"
            selectedDate={startDate}
            onChange={setStartDate}
            placeholderText="Початок"
          />
        </InputWrapper>

        <InputWrapper>
          <DateTimeInput
            name="deadLineDate"
            selectedDate={deadlineDate}
            onChange={setDeadlineDate}
            placeholderText="Завершення"
          />
        </InputWrapper>

        <InputWrapper>
          <SelectBook
            unreadBooks={unreadBooks}
            getBooksIds={getBooksIds}
            booksIds={booksIds}
          />
        </InputWrapper>

        <WrapperTrainingList>
          <TrainingList books={books} handleUpdateBook={handleUpdateBook} />
        </WrapperTrainingList>

        <Button type="submit">Почати тренування</Button>
      </form>
    </Wrapper>
  );
};

export default TrainForm;

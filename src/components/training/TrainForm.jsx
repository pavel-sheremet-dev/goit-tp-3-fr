import { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { trainingSelectors, trainingOperations } from 'redux/training';
import { booksSelectors } from 'redux/books';

import DateTimeInput from './datetime/DateTime';
import SelectBook from './selectBook/SelectBook';
import TrainingList from './trainingList/TrainingList';
import ActiveTrainList from './activeList/ActiveTrainList';
import { statusKeys } from 'helpers/config';

import {
  Wrapper,
  Form,
  Title,
  InputWrapper,
  WrapperTrainingList,
  ErrorMessage,
  Button,
} from './TrainForm.styled';

const TrainForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [deadlineDate, setDeadlineDate] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksIds, setBooksIds] = useState([]);
  const [error, setError] = useState('');
  const isValidate = useRef(false);
  const status = useSelector(trainingSelectors.getStatus);
  const unreadBooks = useSelector(booksSelectors.getUnreadBooks);

  useEffect(() => {
    if (!isValidate.current) return;
    if (!startDate) {
      setError(t('dateOfStartError'));
      return;
    }
    if (!deadlineDate) {
      setError(t('dateOfEndError'));
      return;
    }
    if (!books.length) {
      setError(t('oneBookError'));
      return;
    }
    setError(false);
  }, [books.length, deadlineDate, startDate, t]);

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
    if (!isValidate.current) return;
    if (!startDate) {
      setError(t('dateOfStartError'));
      return;
    }
    if (!deadlineDate) {
      setError(t('dateOfEndError'));
      return;
    }
    if (!books.length) {
      setError(t('oneBookError'));
      return;
    }
    setError(false);

    dispatch(
      trainingOperations.addTraining({ startDate, deadlineDate, books }),
    );
    resetForm();
  };

  const resetForm = () => {
    setError(false);
    setStartDate('');
    setDeadlineDate('');
    setBooks([]);
  };

  return (
    <Wrapper>
      <Title>{t('myTraining')}</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {status !== statusKeys().active ? (
          <>
            <InputWrapper>
              <DateTimeInput
                name="startDate"
                selectedDate={startDate}
                onChange={handleStartDate}
                placeholderText={t('startOfTraining')}
                disabled={status === statusKeys().active}
              />
            </InputWrapper>

            <InputWrapper>
              <DateTimeInput
                name="deadLineDate"
                selectedDate={deadlineDate}
                onChange={handleDeadlineDate}
                placeholderText={t('endOfTraining')}
                disabled={status === statusKeys().active}
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
          </>
        ) : (
          <></>
        )}

        <WrapperTrainingList>
          {status !== statusKeys().active ? (
            <TrainingList books={books} handleUpdateBook={handleUpdateBook} />
          ) : (
            <ActiveTrainList />
          )}
        </WrapperTrainingList>

        {unreadBooks.length === 0 || status === statusKeys().active ? (
          <Button style={{ display: 'none' }} type="submit">
            {t('start')}
          </Button>
        ) : (
          <Button type="submit">{t('start')}</Button>
        )}
      </Form>
    </Wrapper>
  );
};

export default TrainForm;

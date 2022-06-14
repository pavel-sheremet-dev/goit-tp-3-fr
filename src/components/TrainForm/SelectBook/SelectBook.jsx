import React from 'react';
import { useSelector } from 'react-redux';

// import { storageKey } from '../TrainForm';
import { trainingSelectors } from 'redux/training';
import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';
import { Label } from './SelectBook.styled';

const SelectBook = ({ unreadBooks, getBooksIds, booksIds }) => {
  const isStatusTraining = useSelector(trainingSelectors.getStatus);

  // const savedBooks = sessionStorage.getItem(storageKey) ?? [];
  // console.log(savedBooks);
  // const savedBookIds = savedBooks.map(book => book.id);

  //   const filteredBooks = unreadBooks.filter(
  //   book => ![...booksIds, ...savedBookIds].includes(book.id),
  // );

  const filteredBooks = unreadBooks.filter(book => !booksIds.includes(book.id));

  return (
    <Label>
      <CalendarIconDowm />
      {!isStatusTraining ? (
        <select name="book" onChange={e => getBooksIds(e.target.value)}>
          <option defaultValue="" hidden>
            Обрати книги з бібліотеки
          </option>
          {filteredBooks.map(book => (
            <option value={book.id} key={book.id}>
              {book.name}
            </option>
          ))}
        </select>
      ) : (
        <select
          desabled="true"
          name="book"
          style={{ backgroundColor: 'transparent' }}
          onChange={e => getBooksIds(e.target.value)}
        >
          <option defaultValue="" hidden>
            Обрати книги з бібліотеки
          </option>
        </select>
      )}
    </Label>
  );
};

export default SelectBook;

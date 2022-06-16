import React from 'react';
import { useSelector } from 'react-redux';

import { trainingSelectors } from 'redux/training';
import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';
import { Label } from './SelectBook.styled';

const SelectBook = ({ unreadBooks, getBooksIds, booksIds }) => {
  const isActiveTraining = useSelector(trainingSelectors.getStatus);

  const filteredBooks = unreadBooks.filter(book => !booksIds.includes(book.id));

  return (
    <Label>
      <CalendarIconDowm />
      {!isActiveTraining ? (
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
          disabled={true}
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

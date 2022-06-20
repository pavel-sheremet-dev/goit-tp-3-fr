import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { trainingSelectors } from 'redux/training';
import { ReactComponent as CalendarIconDowm } from 'assets/images/svg/calendar-icon-down.svg';
import { statusKeys } from 'helpers/config';
import { Label } from './SelectBook.styled';

const SelectBook = ({ unreadBooks, getBooksIds, booksIds }) => {
  const { t } = useTranslation();
  const status = useSelector(trainingSelectors.getStatus);

  const filteredBooks = unreadBooks.filter(book => !booksIds.includes(book.id));

  return (
    <Label>
      <CalendarIconDowm />
      {status !== statusKeys().active ? (
        <select name="book" onChange={e => getBooksIds(e.target.value)}>
          <option defaultValue="" hidden>
            {t('selectBook')}
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
            {t('selectBook')}
          </option>
        </select>
      )}
    </Label>
  );
};

export default SelectBook;

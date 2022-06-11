import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import IconButton from '../../common/button/IconButton';
import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';
import { Wraper, Placeholder, Select, SelectItem } from './SelectBook.styled';
import { addBook } from 'redux/training/training-slice';
import { useEffect } from 'react';

const SelectBook = ({ options, onChange }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedBook, setSelectedBook] = useState('');
  const [booksIds, setbooksIds] = useState([]);
  const [choosedBooks, setChoosedBooks] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!choosedBooks.length) return;
  //   onChange(choosedBooks);
  // }, [choosedBooks]);

  const chooseItem = ({ _id, name, author, year, pages }) => {
    setSelectedBook(name);
    setOpenSelect(false);
    onChange([...choosedBooks, { _id, name, author, year, pages }]);

    setbooksIds(state => [...state, _id]);
    setChoosedBooks(state => [...state, { _id, name, author, year, pages }]);
    dispatch(addBook({ _id, name, author, year, pages }));

    setSelectedBook('');
  };

  const toggleList = () => {
    setOpenSelect(prevState => !prevState);
  };

  const filteredBooks = options?.filter(({ _id }) => {
    return !booksIds.includes(_id);
  });

  return (
    <Wraper>
      <IconButton
        IconComponent={CalendarIconDowm}
        onClick={toggleList}
        className={'iconDownInput'}
      />
      {selectedBook ? (
        <span>{selectedBook}</span>
      ) : (
        <Placeholder>Обрати книги з бібліотеки</Placeholder>
      )}
      {openSelect && (
        <Select>
          {filteredBooks.map(item => (
            <SelectItem
              value={item.name}
              key={item.name}
              onClick={() => chooseItem(item)}
            >
              {item.name}, {item.author}
            </SelectItem>
          ))}
        </Select>
      )}
    </Wraper>
  );
};

export default SelectBook;

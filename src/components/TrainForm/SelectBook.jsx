import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';

import styled from 'styled-components';

const SelectBook = ({ unreadBooks = [], getBooksIds, booksIds }) => {
  const filteredBooks = unreadBooks.filter(
    book => !booksIds.includes(book._id),
  );

  return (
    <Label>
      <CalendarIconDowm />
      <select name="book" onChange={e => getBooksIds(e.target.value)}>
        <option value="">Обрати книги з бібліотеки</option>
        {filteredBooks.map(book => (
          <option value={book._id} key={book._id}>
            {book.name}
          </option>
        ))}
      </select>
    </Label>
  );
};

export default SelectBook;

export const Label = styled.label`
  display: relative;
  width: 280px;
  height: 42px;

  & #dropdown {
    appearance: none;
    padding: 5px;
    background-color: #4834d4;
    color: white;
    border: none;
    font-family: inherit;
    outline: none;
  }

  & select {
    appearance: none;
    width: 100%;
    height: 100%;
    padding: 10px 40px 10px 12px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.21;
    color: #a6abb9;
    outline: none;
    border: none;
    box-shadow: inset 0px 1px 2px rgba(29, 29, 27, 0.15);

    &::-ms-expand {
      display: none;
    }
  }

  & svg {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.tablet}) {
    width: 483px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakPoints.desktop}) {
    width: 715px;
  }
`;

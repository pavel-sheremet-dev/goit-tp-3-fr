import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';
import { Label } from './SelectBook.styled';

const SelectBook = ({ unreadBooks = [], getBooksIds, booksIds }) => {
  const filteredBooks = unreadBooks.filter(book => !booksIds.includes(book.id));

  return (
    <Label>
      <CalendarIconDowm />
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
    </Label>
  );
};

export default SelectBook;

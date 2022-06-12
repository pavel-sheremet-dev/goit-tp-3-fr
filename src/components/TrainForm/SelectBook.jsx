import { ReactComponent as CalendarIconDowm } from 'images/svg/calendar-icon-down.svg';

const SelectBook = ({ unreadBooks = [], getBooksIds, booksIds }) => {
  console.log('unreadBooks', unreadBooks);

  const filteredBooks = unreadBooks.filter(
    book => !booksIds.includes(book._id),
  );

  return (
    <label>
      <CalendarIconDowm />
      <select name="book" onChange={e => getBooksIds(e.target.value)}>
        <option value="">Обрати книги з бібліотеки</option>
        {filteredBooks.map(book => (
          <option value={book._id} key={book._id}>
            {book.name}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectBook;

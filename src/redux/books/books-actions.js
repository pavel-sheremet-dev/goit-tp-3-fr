import { createAction } from '@reduxjs/toolkit';

const addBook = createAction('books/add', ({ title, author, year, pages }) => ({
  payload: {
    title,
    author,
    year,
    pages,
  },
}));

export default addBook;

import { createSelector } from '@reduxjs/toolkit';

export const getAllBooks = state => state.books.data.items;

export const getLoading = state => state.books.data.loading;

export const getError = state => state.books.data.error;

export const getFilter = state => state.books.filter;

export const getFilteredBooks = createSelector(
  getAllBooks,
  getFilter,
  (books, filter) => {
    const normalizedFilter = filter?.toLowerCase();
    return books.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getUnreadBooks = createSelector([getAllBooks], books =>
  books.filter(({ status }) => status === 'unread'),
);

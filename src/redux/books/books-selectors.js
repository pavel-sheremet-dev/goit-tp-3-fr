export const getAllBooks = state => state.books.library;

export const getUnreadBooks = state => state.books.library.unread;

export const getFinishedBooks = state => state.books.library.finished;

export const getIsFirstLoaded = state => state.books.isFirstLoaded;

export const getLoading = state => state.books.loading;

export const getError = state => state.books.error;

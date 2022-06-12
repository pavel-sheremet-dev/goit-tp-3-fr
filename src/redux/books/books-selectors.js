export const getAllBooks = state => state.library;

export const getUnreadBooks = state => state.library['unread'];

export const getLoading = state => state.loading;

export const getError = state => state.error;

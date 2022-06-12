// Adding training
export const getStartDate = state => state.training.startDate;
export const getDeadlineDate = state => state.training.deadlineDate;
export const getBooks = state => state.training.books;
export const getIdBook = state => state.training.books.id;
export const getPagesBook = state => state.training.books.pages;
export const getTraining = state => state;

// Training result
export const getDate = state => state.training.date;
export const getPointResult = state => state.training.pointResult;

// Other
export const getLoading = state => state.training.loading;
export const getError = state => state.training.error;

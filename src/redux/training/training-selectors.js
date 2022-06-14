// Adding training
export const getId = state => state.training.training.id;
export const getStatus = state => state.training.training.status;
export const getStartDate = state => state.training.training.startDate;
export const getDeadlineDate = state => state.training.training.deadlineDate;
export const getBooks = state => state.training.training.books;

export const getTraining = state => state.training.training;
export const getFirstLoading = state => state.training.firstLoading;

// Training result
export const getResult = state => state.training.training.results;
export const getDate = state => state.training.date;
export const getPointResult = state => state.training.pointResult;

// Other
export const getLoading = state => state.training.loading;
export const getError = state => state.training.error;

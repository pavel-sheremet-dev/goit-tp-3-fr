export const getValueFromSessionStorage = key =>
  sessionStorage.getItem(key) ?? '';

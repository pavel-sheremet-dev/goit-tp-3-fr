import axios from 'axios';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjllNjk3YzViZDU4ZWYwMmI5YTllOWYiLCJwZXJtaXNzaW9ucyI6W251bGxdLCJpYXQiOjE2NTQ5NTE3ODcsImV4cCI6MTY1NTAzODE4N30.vaK7S310YJyUHH1jJ3jZgtqQi9c-OGHUEoTzKT-tO-Q';

axios.defaults.headers.common = { Authorization: `Bearer ${token}` };

const fetchLibBooksCollections = async () => {
  const response = await axios.get('/api/books');
  // console.log(response.data.library);
  return response.data.library;
};

export default fetchLibBooksCollections;

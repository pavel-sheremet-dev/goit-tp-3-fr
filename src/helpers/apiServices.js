import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// REACT_APP_API_BASE_URL - сервер на хероку, или локальный сервер локалхост с портом,
// отличного от того, на котром запускается реакт

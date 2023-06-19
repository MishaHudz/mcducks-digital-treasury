import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

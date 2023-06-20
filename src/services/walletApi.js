import axios from 'axios';

axios.defaults.baseURL = 'https://kapusta-backend.goit.global';

export function setHeadersToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function unSetHeadersToken() {
  axios.defaults.headers.common.Authorization = ``;
}

export async function userRegisterApi(userdata) {
  const data = await axios.post('auth/register', {
    email: userdata.email,
    password: userdata.userPass,
  });
  return data;
  // token.set(data.token);
}

export async function userLoginApi(userdata) {
  const data = await axios.post('auth/login', {
    email: userdata.email,
    password: userdata.userPass,
  });
  return data;
  // token.set(data.token);
}

export async function userLogoutApi(userdata) {
  const { data } = await axios.post('auth/logout');
  return data;
}

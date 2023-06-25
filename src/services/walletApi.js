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
}

export async function userLoginApi(userdata) {
  const data = await axios.post('auth/login', {
    email: userdata.email,
    password: userdata.userPass,
  });
  return data;
}

export async function userLogoutApi(userdata) {
  const { data } = await axios.post('auth/logout');
  return data;
}
/* ================== TRANSACTIONS =========================== */

export async function addTransactionIncomeApi(transactionForm) {
  const { data } = await axios.post('/transaction/income', {
    ...transactionForm,
  });

  return data;
}
export async function getTransactionIncomeApi() {
  const { data } = await axios.get('/transaction/income');
  return data;
}
export async function addTransactionExpenseApi(transactionForm) {
  const { data } = await axios.post('/transaction/expense', {
    ...transactionForm,
  });
  return data;
}
export async function getTransactionExpenseApi() {
  const { data } = await axios.get('/transaction/expense');
  return data;
}
export async function deleteTransactionApi(transactionId) {
  const { data } = await axios.delete(`/transaction/${transactionId}`);
  return data;
}

export async function getTransactionIncomeCategoriesApi() {
  const { data } = await axios.get('/transaction/income-categories');
  return data;
}

export async function getTransactionExpenseCategoriesApi() {
  const { data } = await axios.get('/transaction/expense-categories');
  return data;
}

export async function getTransactionPeriodDataApi(date) {
  const { data } = await axios.get(`/transaction/period-data?date=${date}`);
  return data;
}

export async function userBalance(newBalance) {
  const { data } = await axios.patch(`/user/balance`, {
    newBalance: newBalance,
  });
  return data;
}

export async function getUserInfo() {
  const { data } = await axios(`/user`);
  return data;
}

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import api from '../../services/api';
import { loginError, loginSuccess, logout } from '../ducks/auth';
import { load, stop } from '../ducks/loading';
import { getEnterprises } from '../ducks/enterprises';
import catcherror from '../../util/catchError';

export const authLogin = (user) => {
  return (dispatch) => {
    dispatch(load());
    dispatch(logout());
    api
      .post('/api/v1/users/auth/sign_in', user)
      .then((res) => {
        // eslint-disable-next-line prettier/prettier
        localStorage.setItem('empresas-token', res.headers['access-token']);
        localStorage.setItem('empresas-uid', res.headers.uid);
        localStorage.setItem('empresas-client', res.headers.client);
        dispatch(loginSuccess());
        dispatch(stop());
        window.location.pathname = '/';
      })
      .catch((err) => {
        localStorage.clear();
        dispatch(stop());
        console.log(err);
        dispatch(loginError());
      });
  };
};

const header = {
  headers: {
    'Content-Type': 'application/json',
    'access-token': localStorage.getItem('empresas-token'),
    'client': localStorage.getItem('empresas-client'),
    'uid': localStorage.getItem('empresas-uid'),
  },
};

export const searchEnterprises = (name) => {
  return (dispatch) => {
    dispatch(load());
    dispatch(logout());
    api
      .get(
        `https://empresas.ioasys.com.br/api/v1/enterprises?enterprise_types=3&name=${name}`,header
      )
      .then((res) => {
        dispatch(getEnterprises(res.data));
        dispatch(stop());
      })
      .catch((err) => {
        dispatch(stop());
        catcherror(err);
      });
  };
};

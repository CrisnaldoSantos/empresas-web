/* eslint-disable no-unused-vars */
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {},
  token: '',
  error: false,
  success: false,
};

export const login = createAction('LOGIN');
export const loginError = createAction('LOGIN_ERROR');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const logout = createAction('LOGOUT');

export default createReducer(INITIAL_STATE, {
  [login.type]: (state, action) => action.payload,
  [loginError.type]: (state, action) => ({ success: false, error: true }),
  [loginSuccess.type]: (state, action) => ({ success: true, error: false }),
  [logout.type]: (state, action) => ({
    user: {},
    token: '',
    success: false,
    error: false,
  }),
});

/* eslint-disable no-unused-vars */
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  enterprise: {},
  success: true,
};

export const getEnterprise = createAction('GET_ENTERPRISES');
export const resetEnterprise = createAction('RESET_ENTERPRISES');

export default createReducer(INITIAL_STATE, {
  [getEnterprise.type]: (state, action) => action.payload,
  [resetEnterprise.type]: (state, action) => ({ enterprises: [] }),
});

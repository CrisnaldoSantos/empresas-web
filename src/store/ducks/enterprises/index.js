/* eslint-disable no-unused-vars */
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  enterprises: [],
};

export const getEnterprises = createAction('GET_ENTERPRISES');

export default createReducer(INITIAL_STATE, {
  [getEnterprises.type]: (state, action) => action.payload,
});

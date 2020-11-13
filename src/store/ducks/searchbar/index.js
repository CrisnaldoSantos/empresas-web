/* eslint-disable no-unused-vars */
import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  searchTerm: '',
};

export const setSearch = createAction('SET_SEARCH');

export default createReducer(INITIAL_STATE, {
  [setSearch.type]: (state, action) => action.payload,
});

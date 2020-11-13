import { configureStore } from '@reduxjs/toolkit';
import authReducer from './ducks/auth';
import loadReducer from './ducks/loading';
import enterprisesReducer from './ducks/enterprises';
import searchReducer from './ducks/searchbar';

export default configureStore({
  reducer: {
    auth: authReducer,
    load: loadReducer,
    enterprises: enterprisesReducer,
    searchbar: searchReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './ducks/auth';
import loadReducer from './ducks/loading';

export default configureStore({
  reducer: {
    auth: authReducer,
    load: loadReducer,
  },
});

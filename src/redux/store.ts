import { configureStore } from '@reduxjs/toolkit';
import saveToLocalStorage from './middlewares/words';

import rootReducer from './reducer';
import apiSlice from './slices/apiSlice';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware, saveToLocalStorage),
});

export default store;

// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slide/UserReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

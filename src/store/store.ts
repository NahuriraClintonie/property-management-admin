import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice';

// Setting up the store and adding reducers
const store = configureStore({
  reducer: {
    user: userReducer,  // User data will be handled in the userSlice
  },
});

export default store;

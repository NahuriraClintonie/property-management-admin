import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// The initial state
interface UserState {
  username: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  username: '',
  isLoggedIn: false,
};

// Create a slice for user actions
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = '';
      state.isLoggedIn = false;
    },
  },
});

// Export actions
export const { login, logout } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from 'types/app';

interface AuthState {
  currentUser: TUser;
  isAuth: boolean;
}

const initialState: AuthState = {
  currentUser: {} as TUser,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'AUTH',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<TUser>) => {
      state.currentUser = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    logout: () => {
      localStorage.removeItem('token');
      return initialState;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;

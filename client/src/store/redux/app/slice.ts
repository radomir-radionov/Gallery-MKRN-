import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TUser } from 'types/app';

interface AppState {
  currentUser: TUser;
  isAuth: boolean;
}

const initialState: AppState = {
  currentUser: {} as TUser,
  isAuth: false,
};

const appSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    // auth
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

export const appActions = appSlice.actions;

export default appSlice.reducer;

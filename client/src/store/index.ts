import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './redux/auth';
import { appApi } from './api/authApi';

const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './redux/app';
import { appApi } from './api/api';

const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import { ErrorLogger } from '../utils/notify-MD';

import { reviewsApi } from './reviews/reviewsApi';
import { tasksApi } from './tasks/tasksApi';
import { persistedUserReducer } from './auth/slices/authfulfilledSlice';
import { isRefreshingReducer } from './auth/slices/authRefreshingSlice';
import { errorReducer } from './auth/slices/authErrorSlice';
import { isLoadingReducer } from './auth/slices/authIsLoadingSlice';

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    error: errorReducer,
    isLoading: isLoadingReducer,
    isRefreshing: isRefreshingReducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer
  },
  middleware: (gDM) =>
    gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
      .concat(reviewsApi.middleware)
      .concat(tasksApi.middleware)
      .concat(ErrorLogger),
  devTools: process.env.NODE_ENV === 'development'
});
setupListeners(store.dispatch);
export const persistor = persistStore(store);

import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import { setupListeners } from '@reduxjs/toolkit/dist/query/react';

import { baseApi } from './api/base.service';
import userService from './api/user.service';
import { userSlice, globalSlice } from './slice';

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  user: userSlice,
  global: globalSlice,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'global'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareHandler = (getDefaultMiddleware: any) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),

    // service middleware
    userService.middleware,
  ];
  // if (process.env.NODE_ENV === 'development') {
  //   middlewareList.push(logger);
  // }
  return middlewareList;
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware),
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);

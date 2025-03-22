import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import homePageReducer from './slices/homePageSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    homePage: homePageReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
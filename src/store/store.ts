import { configureStore } from '@reduxjs/toolkit';
import homepageReducer from './slices/homeSlice';
import learnReducer from './slices/learnSlice';

const store = configureStore({
  reducer: {
    homepage: homepageReducer,
    learn: learnReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
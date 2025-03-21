import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice'; // Import the counter slice

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
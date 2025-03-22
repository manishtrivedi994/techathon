import {configureStore} from '@reduxjs/toolkit';
import homepageReducer from './slices/homePageSlice';
import learnReducer from './slices/learnSlice';
import authSlice from './slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const store = configureStore({
  reducer: {
    homePage: homepageReducer,
    learn: learnReducer,
    auth: persistReducer(persistConfig, authSlice),
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;

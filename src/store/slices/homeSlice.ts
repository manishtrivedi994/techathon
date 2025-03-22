import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the homepage state
interface HomepageState {
  loading: boolean;
  data: any[]; // Replace `any` with the actual type of your data
  error: string | null;
}

// Define the initial state
const initialState: HomepageState = {
  loading: false,
  data: [],
  error: null,
};

// Create the slice
const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    // Action to set loading state
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    // Action to set data
    setData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
      state.error = null;
    },
    // Action to set error
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.data = [];
    },
    // Action to reset the state
    resetState(state) {
      state.loading = false;
      state.data = [];
      state.error = null;
    },
  },
});

// Export the actions
export const { setLoading, setData, setError, resetState } = homepageSlice.actions;

// Export the reducer
export default homepageSlice.reducer;
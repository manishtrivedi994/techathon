import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the learn page state
interface LearnState {
  loading: boolean;
  lessons: any[]; // Replace `any` with the actual type of your lessons data
  error: string | null;
}

// Define the initial state
const initialState: LearnState = {
  loading: false,
  lessons: [],
  error: null,
};

// Create the slice
const learnSlice = createSlice({
  name: 'learn',
  initialState,
  reducers: {
    // Action to set loading state
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    // Action to set lessons data
    setLessons(state, action: PayloadAction<any[]>) {
      state.lessons = action.payload;
      state.error = null;
    },
    // Action to set error
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.lessons = [];
    },
    // Action to reset the state
    resetState(state) {
      state.loading = false;
      state.lessons = [];
      state.error = null;
    },
  },
});

// Export the actions
export const { setLoading, setLessons, setError, resetState } = learnSlice.actions;

// Export the reducer
export default learnSlice.reducer;
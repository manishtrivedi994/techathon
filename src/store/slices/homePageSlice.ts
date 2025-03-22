import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum ApiStatus {
  Pending = 'pending',
  Fulfilled = 'fulfilled',
  Rejected = 'rejected',
}

interface HomePageState {
  overallReview: any; // Replace 'any' with a specific type if possible
  timeStampReview: any; // Replace 'any' with a specific type if possible
  overallReviewStatus: ApiStatus;
  timeStampReviewStatus: ApiStatus;
  overallReviewError: string | null;
  timeStampReviewError: string | null;
  isLoading: boolean
}

const initialState: HomePageState = {
  overallReview: null,
  timeStampReview: null,
  overallReviewStatus: ApiStatus.Pending,
  timeStampReviewStatus: ApiStatus.Pending,
  overallReviewError: null,
  timeStampReviewError: null,
  isLoading: false
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    fetchOverallReviewPending: (state) => {
      state.overallReviewStatus = ApiStatus.Pending;
      state.overallReviewError = null;
      state.isLoading = true
    },
    fetchOverallReviewFulfilled: (state, action: PayloadAction<any>) => {
      state.overallReviewStatus = ApiStatus.Fulfilled;
      state.overallReview = action.payload;
      state.isLoading = false
    },
    fetchOverallReviewRejected: (state, action: PayloadAction<string>) => {
      state.overallReviewStatus = ApiStatus.Rejected;
      state.overallReviewError = action.payload;
      state.isLoading = false
    },
    fetchTimeStampReviewPending: (state) => {
      state.timeStampReviewStatus = ApiStatus.Pending;
      state.timeStampReviewError = null;
      state.isLoading = true
    },
    fetchTimeStampReviewFulfilled: (state, action: PayloadAction<any>) => {
      state.timeStampReviewStatus = ApiStatus.Fulfilled;
      state.timeStampReview = action.payload;
      state.isLoading = false
    },
    fetchTimeStampReviewRejected: (state, action: PayloadAction<string>) => {
      state.timeStampReviewStatus = ApiStatus.Rejected;
      state.timeStampReviewError = action.payload;
      state.isLoading = false
    },
    resetHomePage: (state) => {
      state.overallReview = null;
      state.timeStampReview = null;
      state.overallReviewStatus = ApiStatus.Pending;
      state.timeStampReviewStatus = ApiStatus.Pending;
      state.overallReviewError = null;
      state.timeStampReviewError = null;
    },
  },
});

export const {
  fetchOverallReviewPending,
  fetchOverallReviewFulfilled,
  fetchOverallReviewRejected,
  fetchTimeStampReviewPending,
  fetchTimeStampReviewFulfilled,
  fetchTimeStampReviewRejected,
  resetHomePage,
} = homePageSlice.actions;

export default homePageSlice.reducer;
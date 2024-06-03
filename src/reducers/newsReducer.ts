import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NewsState {
    newsItems: Array<any>;
    isLoading: boolean;
    error: string | null;
}

const initialState: NewsState = {
    newsItems: [],
    isLoading: false,
    error: null,
};

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        fetchNewsRequest(state) {
            state.isLoading = true;
        },
        fetchNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;
export default newsSlice.reducer;
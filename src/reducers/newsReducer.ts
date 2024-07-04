import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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
        fetchBreakingNewsRequest(state) {
            state.isLoading = true;
        },
        fetchBreakingNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchBreakingNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchWorldNewsRequest(state) {
            state.isLoading = true;
        },
        fetchWorldNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchWorldNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchBusinessNewsRequest(state) {
            state.isLoading = true;
        },
        fetchBusinessNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchBusinessNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchScienceNewsRequest(state) {
            state.isLoading = true;
        },
        fetchScienceNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchScienceNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
        fetchSportsNewsRequest(state) {
            state.isLoading = true;
        },
        fetchSportsNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchSportsNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },

        //EuroNews
        fetchEuroNewsRequest(state) {
            state.isLoading = true;
        },
        fetchEuroNewsSuccess(state, action: PayloadAction<any[]>) {
            state.isLoading = false;
            state.newsItems = action.payload;
        },
        fetchEuroNewsFailure(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchNewsRequest,
    fetchNewsSuccess,
    fetchNewsFailure,
    fetchBreakingNewsRequest,
    fetchBreakingNewsSuccess,
    fetchBreakingNewsFailure,
    fetchWorldNewsRequest,
    fetchWorldNewsSuccess,
    fetchWorldNewsFailure,
    fetchBusinessNewsRequest,
    fetchBusinessNewsSuccess,
    fetchBusinessNewsFailure,
    fetchScienceNewsRequest,
    fetchScienceNewsSuccess,
    fetchScienceNewsFailure,
    fetchSportsNewsRequest,
    fetchSportsNewsSuccess,
    fetchSportsNewsFailure,
    fetchEuroNewsFailure,
    fetchEuroNewsRequest,
    fetchEuroNewsSuccess
} = newsSlice.actions;

export default newsSlice.reducer;

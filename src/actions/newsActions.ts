import { AppDispatch } from '../store';
import axios from 'axios';
import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, fetchBreakingNewsRequest, fetchBreakingNewsSuccess, fetchBreakingNewsFailure } from '../reducers/newsReducer';

export const fetchNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchNewsRequest());
    try {
        const filePaths = ['/assets/latest-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchNewsFailure(error.message));
        } else {
            dispatch(fetchNewsFailure('An unknown error occurred.'));
        }
    }
};

export const fetchBreakingNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchBreakingNewsRequest());
    try {
        const filePaths = ['/assets/breaking-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchBreakingNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchBreakingNewsFailure(error.message));
        } else {
            dispatch(fetchBreakingNewsFailure('An unknown error occurred.'));
        }
    }
};

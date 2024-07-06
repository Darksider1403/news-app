import {AppDispatch} from '../store';
import axios from 'axios';
import {
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
    fetchEducationNewsFailure,
    fetchEducationNewsRequest,
    fetchEducationNewsSuccess,
    fetchFamilyNewsRequest,
    fetchFamilyNewsSuccess,
    fetchFamilyNewsFailure
} from '../reducers/newsReducer';

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

export const fetchWorldNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchWorldNewsRequest());
    try {
        const filePaths = ['/assets/world-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchWorldNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchWorldNewsFailure(error.message));
        } else {
            dispatch(fetchWorldNewsFailure('An unknown error occurred.'));
        }
    }
};

export const fetchBusinessNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchScienceNewsRequest());
    try {
        const filePaths = ['/assets/business-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchScienceNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchScienceNewsFailure(error.message));
        } else {
            dispatch(fetchScienceNewsFailure('An unknown error occurred.'));
        }
    }
};

export const fetchScienceNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchBusinessNewsRequest());
    try {
        const filePaths = ['/assets/science-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchBusinessNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchBusinessNewsFailure(error.message));
        } else {
            dispatch(fetchBusinessNewsFailure('An unknown error occurred.'));
        }
    }
};

export const fetchSportsNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchSportsNewsRequest());
    try {
        const filePaths = ['/assets/sport-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchSportsNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchSportsNewsFailure(error.message));
        } else {
            dispatch(fetchSportsNewsFailure('An unknown error occurred.'));
        }
    }
}


export const fetchEducationNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchEducationNewsRequest());
    try {
        const filePaths = ['/assets/education-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchEducationNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchEducationNewsFailure(error.message));
        } else {
            dispatch(fetchEducationNewsFailure('An unknown error occurred.'));
        }
    }
}

export const fetchFamilyNews = () => async (dispatch: AppDispatch) => {
    dispatch(fetchFamilyNewsRequest());
    try {
        const filePaths = ['/assets/family-news.json'];
        const allData: any[] = [];

        for (const filePath of filePaths) {
            const response = await axios.get(filePath);
            allData.push(...response.data.items);
        }

        allData.sort((a, b) => new Date(b.date_published).getTime() - new Date(a.date_published).getTime());

        dispatch(fetchFamilyNewsSuccess(allData));
    } catch (error) {
        if (error instanceof Error) {
            dispatch(fetchFamilyNewsFailure(error.message));
        } else {
            dispatch(fetchFamilyNewsFailure('An unknown error occurred.'));
        }
    }
}


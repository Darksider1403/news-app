import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../actions/newsActions';
import DOMPurify from 'dompurify';
import { RootState, AppDispatch } from '../store';

const NewsFeed: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const newsState = useSelector((state: RootState) => state.news);
    const { newsItems, isLoading, error } = newsState;

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    return (
        <div>
            {isLoading ? (
                <p>Loading news items...</p>
            ) : error ? (
                <p>{error}</p>
            ) : newsItems.length > 0 ? (
                <ul>
                    {newsItems.map((item) => (
                        <li key={item.url}>
                            <h3>{item.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(item.content_html || item.summary),
                                }}
                            />
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No news items available.</p>
            )}
        </div>
    );
};

export default NewsFeed;
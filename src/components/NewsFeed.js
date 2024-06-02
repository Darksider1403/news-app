import React, { useState, useEffect } from 'react';

function NewsFeed() {
    const [newsItems, setNewsItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            setIsLoading(true);
            const filePaths = ['/assets/latest-news.json'];
            const allData = [];

            for (const filePath of filePaths) {
                try {
                    const response = await fetch(filePath, {
                        headers: {
                            Accept: 'application/json',
                        },
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const fileData = await response.json();
                    allData.push(...fileData.items);
                } catch (error) {
                    console.error('Error fetching news:', error);
                    setError('Failed to load news items. Please try again later.');
                }
            }

            allData.sort((a, b) => new Date(b.date_published) - new Date(a.date_published));
            setNewsItems(allData);
            setIsLoading(false);
        };

        loadNews();
    }, []);

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
                            <p>{item.description}</p>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">Read more</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No news items available.</p>
            )}
        </div>
    );
}

export default NewsFeed;

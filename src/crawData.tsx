import React, { useState, useEffect } from 'react';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
type Props = {}
interface RssItem {
    title: string;
    link: string;
    description: string;
    pubDate: string;
}

const Page: React.FC<{ url: string }> = ({ url }) => {
    const [rssItems, setRssItems] = useState<RssItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${CORS_PROXY}${url}`);
                if (!response.ok) {
                    throw new Error('Không thể tải dữ liệu RSS');
                }
                const text = await response.text();
                const parser = new DOMParser();
                const xml = parser.parseFromString(text, 'text/xml');
                const items = xml.querySelectorAll('item');
                const rssItemsArray: RssItem[] = Array.from(items, (item) => ({
                    title: item.querySelector('title')?.textContent || '',
                    link: item.querySelector('link')?.textContent || '',
                    description: item.querySelector('description')?.textContent || '',
                    pubDate: item.querySelector('pubDate')?.textContent || '',
                }));
                setRssItems(rssItemsArray);
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu RSS:', error);
            }
        };

        fetchData();
    }, [url]);

    return (
        <div className="container mx-auto p-4">
            {rssItems.length === 0 ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                <div className="space-y-4">
                    {rssItems.map((item, index) => (
                        <div key={index} className={`p-4 bg-white shadow rounded-lg ${index === 0 ? 'mt-20' : ''}`}>
                            <h2 className="text-xl font-bold mb-2">
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{item.title}</a>
                            </h2>
                            <div className="rss-feed text-gray-700" dangerouslySetInnerHTML={{ __html: item.description }} />
                            <p className="text-gray-500 mt-2">Ngày đăng: {item.pubDate}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Page;

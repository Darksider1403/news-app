// import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEuro2024 } from '../actions/newsActions';
import DOMPurify from 'dompurify';
import { RootState, AppDispatch } from '../store';


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../model/models';

function NewsReader() {
    const [articles, setArticles] = useState<Article[]>([]);;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3000'); // Thay URL của backend vào đây
                setArticles(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Realtime News Reader</h1>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} className="mb-4">
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            <h2 className="text-xl font-semibold">{article.title}</h2>
                            <p className="text-gray-700">{article.enclosure}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NewsReader;



// const Euro2024NewsFeed: React.FC = () => {
//     const dispatch: AppDispatch = useDispatch();
//
//     const newsState = useSelector((state: RootState) => state.euro2024News);
//     const { newsItems, isLoading, error } = newsState;
//
//     useEffect(() => {
//         dispatch(fetchEuro2024());
//     }, [dispatch]);
//
//     return (
//         <div className="container mx-auto p-4">
//             {isLoading ? (
//                 <p className="text-center text-gray-500">Loading Euro2024 news items...</p>
//             ) : error ? (
//                 <p className="space-y-4">{error}</p>
//             ) : newsItems.length > 0 ? (
//                 <ul>
//                     {newsItems.map((item, index) => (
//                         <li key={item.url}
//                             className={`bg-white p-4 shadow-md rounded-lg ${index === 0 ? 'pt-8' : ''}`}>
//                             <h3 className="text-xl font-bold mb-2">{item.title}</h3>
//                             <div className="prose"
//                                 dangerouslySetInnerHTML={{
//                                     __html: DOMPurify.sanitize(item.content_html || item.summary),
//                                 }}
//                             />
//                             <a href={item.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-blue-500 hover:underline mt-2 block">Read more</a>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <p className="text-center text-gray-500">No Euro2024 news items available.</p>
//             )}
//         </div>
//     );
// };
//
// export default Euro2024NewsFeed;
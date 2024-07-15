import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Article } from '../components/model';

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
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

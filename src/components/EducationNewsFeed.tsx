import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducationNews } from "../actions/newsActions";
import DOMPurify from "dompurify";
import { RootState, AppDispatch } from "../store";

const EducationNewsFeed: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const newsState = useSelector((state: RootState) => state.educationNews);
    const { newsItems, isLoading, error } = newsState;

    useEffect(() => {
        dispatch(fetchEducationNews());
    }, [dispatch]);

    return (
        <div className="container mx-auto p-4">
            {isLoading ? (
                <p className="text-center text-gray-500">
                    Loading breaking news items...
                </p>
            ) : error ? (
                <p className="space-y-4">{error}</p>
            ) : newsItems.length > 0 ? (
                <ul>
                    {newsItems.map((item, index) => (
                        <li key={item.url}
                            className={`bg-white p-4 shadow-md rounded-lg ${index === 0 ? "pt-8" : ""}`}
                        >
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <div
                                className="prose"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(item.content_html || item.summary),
                                }}
                            />
                            <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline mt-2 block"
                            >
                                Read more
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">
                    No breaking news items available.
                </p>
            )}
        </div>
    );
};

export default EducationNewsFeed;

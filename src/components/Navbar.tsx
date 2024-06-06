import React from 'react';
import {Link} from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-black">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex justify-between items-center">
                        <div className="max-w-10 text-2xl font-bold capitalize text-white flex items-center">News
                        </div>
                        <div className="flex">
                            <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/">Home</Link>
                                </li>
                                <li className="dropdown relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/">Mới nhất</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/breaking-news">Tin nổi bật</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/world-news">Thế giới</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/business-news">Kinh doanh</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/science-news">Khoa học</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/sports-news">Thể thao</Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                          to="/law-news">Pháp luật</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

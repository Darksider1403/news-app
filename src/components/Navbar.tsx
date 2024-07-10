import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-black">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex justify-between items-center">
                        <div className="max-w-10 text-2xl font-bold capitalize text-white flex items-center">
                            <Link
                                className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                to="/home"> News
                            </Link>
                        </div>
                        <div className="flex">
                            <ul className="navbar hidden lg:flex lg:flex-row text-gray-400 text-sm items-center font-bold">
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/home">Mới nhất
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/tin-tuc-trong-ngay">Tin tức trong ngày
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/bong-da">Bóng đá
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/asian-cup-2019">Asian cup 2019
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/an-ninh-hinh-su">An ninh - hình sự
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/thoi-trang">Thời trang
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/thoi-trang-hitech">Thời trang Hi-tech
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/tai-chinh-bat-dong-san">Tài chính - Bất động sản
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/am-thuc">Ẩm thực
                                    </Link>
                                </li>
                                <li className="relative border-l border-gray-800 hover:bg-gray-900">
                                    <Link
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                        to="/phi-thuong-ki-quac">Phi thường - kỳ quặc
                                    </Link>
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

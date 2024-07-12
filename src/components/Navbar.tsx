import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLUListElement>(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
        if (dropdownRef.current && event.relatedTarget instanceof Node && !dropdownRef.current.contains(event.relatedTarget)) {
            setDropdownOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-black">
                <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
                    <div className="flex justify-between items-center">
                        <div className="max-w-10 text-2xl font-bold capitalize text-white flex items-center">
                            <Link
                                className="block py-3 px-6 border-b-2 border-transparent hover:border-white"
                                to="/"> News
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
                                        to="/am-thuc">Ẩm thực
                                    </Link>
                                </li>
                                <li
                                    className="relative border-l border-gray-800 hover:bg-gray-900"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button
                                        className="block py-3 px-6 border-b-2 border-transparent hover:border-white flex items-center"
                                        onClick={toggleDropdown}
                                    >
                                        More
                                        <svg
                                            className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </button>
                                    {dropdownOpen && (
                                        <ul
                                            className="absolute top-full left-0 bg-black text-white w-64"
                                            ref={dropdownRef}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/cong-nghe-thong-tin">Công nghệ thông tin
                                                </Link>
                                            </li>
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/oto">Ô tô
                                                </Link>
                                            </li>
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/thi-truong-tieu-dung">Thị trường tiêu dùng
                                                </Link>
                                            </li>
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/phi-thuong-ki-quac">Phi thường - kỳ quặc
                                                </Link>
                                            </li>
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/tai-chinh-bat-dong-san">Tài chính - Bất động sản
                                                </Link>
                                            </li>
                                            <li className="border-b border-gray-800 hover:bg-gray-900">
                                                <Link
                                                    className="block py-3 px-6"
                                                    to="/asian-cup-2019">Asian cup 2019
                                                </Link>
                                            </li>
                                        </ul>
                                    )}
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

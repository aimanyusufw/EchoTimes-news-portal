import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { newsCategory } from "../../Dummy/data";

export default function Header() {
    const [darkMode, setDarkMode] = useState(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    const handleMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <header className="absolute top-0 left-0 right-0 ">
            <nav className="bg-white border-gray-200 dark:bg-neutral-900">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center py-4 md:px-4">
                        <a
                            href="/"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            {darkMode ? (
                                <img
                                    src="/assets/Logo_white.svg"
                                    className="w-48"
                                    alt="True Angle Logo"
                                />
                            ) : (
                                <img
                                    src="/assets/Logo_black.svg"
                                    className="w-48"
                                    alt="True Angle Logo"
                                />
                            )}
                        </a>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <button
                                className="px-3 py-3 shadow-md dark:shadow-neutral-800 rounded-md text-black dark:text-white"
                                onClick={handleMode}
                            >
                                {darkMode ? (
                                    <IoSunny className="h-3 w-3" />
                                ) : (
                                    <IoMoon className="h-3 w-3" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-neutral-700">
                <div className="container">
                    <div className="md:px-4 py-3">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 text-sm">
                                {newsCategory.map((data, index) => (
                                    <li
                                        className={`relative ${
                                            index === 0 ? "pe-5" : "px-5"
                                        } ${
                                            index === newsCategory.length - 1
                                                ? "border-x-0"
                                                : "border-s-0"
                                        }`}
                                        key={data.id}
                                    >
                                        <a
                                            href="#"
                                            className="text-gray-900 dark:text-white hover:text-[#1E88E5]"
                                            aria-current="page"
                                        >
                                            {data.name}
                                        </a>
                                        <span
                                            className={`absolute top-1/4 left-full ${
                                                index ===
                                                newsCategory.length - 1
                                                    ? "hidden"
                                                    : ""
                                            } w-[1px] h-1/2 bg-gray-300 dark:bg-gray-700`}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

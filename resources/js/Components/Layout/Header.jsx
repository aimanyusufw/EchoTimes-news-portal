import React, { useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const handleMode = () => {
        document.body.classList.toggle("dark");
        setDarkMode(!darkMode);
    };

    return (
        <header className="absolute top-0 left-0 right-0 ">
            <nav className="bg-white border-gray-200 dark:bg-neutral-900">
                <div className="container">
                    <div className="flex flex-wrap justify-between items-center py-4 md:px-4">
                        <a
                            href="https://flowbite.com"
                            className="flex items-center space-x-3 rtl:space-x-reverse"
                        >
                            <span className="self-center text-xl font-extrabold whitespace-nowrap dark:text-white">
                                <span className="bg-[#388E3C] px-1.5 py-1 me-1.5 rounded-md capitalize text-white">
                                    NUSA
                                </span>
                                KABAR
                            </span>
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
                            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-900 dark:text-white hover:underline"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        Company
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        Team
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-gray-900 dark:text-white hover:underline"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

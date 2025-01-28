import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

export default function Header({ categories }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setDarkMode(savedTheme === "dark");
            document.body.classList.toggle("dark", savedTheme === "dark");
        } else {
            const mediaQuery = window.matchMedia(
                "(prefers-color-scheme: dark)"
            );
            setDarkMode(mediaQuery.matches);
            document.body.classList.toggle("dark", mediaQuery.matches);
        }
    }, []);

    const toggleDarkMode = () => {
        const newTheme = !darkMode ? "dark" : "light";
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
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
                                    className="w-32 md:w-36 lg:w-40"
                                    alt="True Angle Logo"
                                />
                            ) : (
                                <img
                                    src="/assets/Logo_black.svg"
                                    className="w-32 md:w-36 lg:w-40"
                                    alt="True Angle Logo"
                                />
                            )}
                        </a>
                        <div className="flex items-center space-x-6 rtl:space-x-reverse">
                            <button
                                className="px-3 py-3 shadow-sm dark:shadow-neutral-800 rounded-md text-black dark:text-white"
                                onClick={toggleDarkMode}
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
                    <div className="md:px-4 py-3  overflow-y-scroll">
                        <div className="flex items-center">
                            <ul className="flex flex-row font-medium mt-0 text-sm">
                                {categories.map((data, index) => (
                                    <li
                                        className={`relative ${
                                            index === 0 ? "pe-5" : "px-5"
                                        } ${
                                            index === categories.length - 1
                                                ? "border-x-0"
                                                : "border-s-0"
                                        }`}
                                        key={data.id}
                                    >
                                        <Link
                                            href={"category/" + data.slug}
                                            className="text-gray-900 dark:text-white hover:underline"
                                            aria-current="page"
                                        >
                                            {data.name}
                                        </Link>
                                        <span
                                            className={`absolute top-1/4 left-full ${
                                                index === categories.length - 1
                                                    ? "hidden"
                                                    : ""
                                            } w-[1px] h-1/2 bg-gray-300 dark:bg-gray-400`}
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

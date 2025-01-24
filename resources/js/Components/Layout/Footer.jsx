import React from "react";
import {
    FaFacebook,
    FaInstagram,
    FaTiktok,
    FaTwitter,
    FaX,
    FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-neutral-200 dark:bg-neutral-950 py-12">
            <div className="container">
                <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Company
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">
                                    About
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Brand Center
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Help center
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Discord Server
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Twitter
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Facebook
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Licensing
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Download
                        </h2>
                        <ul class="text-gray-600 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    iOS
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Android
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    Windows
                                </a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">
                                    MacOS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="px-4 py-6 md:flex md:items-center md:justify-between">
                    <span class="text-sm text-gray-600 dark:text-gray-300 sm:text-center">
                        © 2023 <a href="https://flowbite.com/">TrueAngle</a>.
                        All Rights Reserved.
                    </span>
                    <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                        <a
                            href="/"
                            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaInstagram />
                            <span class="sr-only">Instagram account</span>
                        </a>
                        <a
                            href="/"
                            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaFacebook />
                            <span class="sr-only">Facebook account</span>
                        </a>
                        <a
                            href="/"
                            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaYoutube />
                            <span class="sr-only">Youtube account</span>
                        </a>
                        <a
                            href="/"
                            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaTiktok />
                            <span class="sr-only">Tik Tok account</span>
                        </a>
                        <a
                            href="/"
                            class="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        >
                            <FaTwitter />
                            <span class="sr-only">X account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

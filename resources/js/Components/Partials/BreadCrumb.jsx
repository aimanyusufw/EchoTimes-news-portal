import React from "react";
import { FaHome } from "react-icons/fa";

export default function BreadCrumb({ data = [] }) {
    return (
        <nav>
            <ol className="flex text-neutral-800 dark:text-white text-xs md:text-sm">
                <li>
                    <a href="/" className="flex items-center gap-2">
                        <FaHome />
                        <span>Home</span>
                    </a>
                </li>
                <span className="px-4">/</span>
                {data.map((item, index) => (
                    <React.Fragment key={item.id}>
                        <li>
                            <a
                                href={item.url}
                                className="flex items-center gap-2"
                            >
                                <span>{item.name}</span>
                            </a>
                        </li>
                        {index < data.length - 1 && (
                            <span className="px-4">/</span>
                        )}
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}

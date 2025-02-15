import React from "react";

const CategorNewsSection = ({ name, news }) => {
    return (
        <section className="py-6 text-neutral-800 dark:text-white">
            <div className="container">
                <div className="md:px-4 mb-4 md:mb-6">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {name}
                    </h1>
                </div>
                <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {news.slice(0, 3).map((data, index) => (
                        <a href="/" className="mb-10 md:mb-0" key={index}>
                            <div className="relative mb-4 md:mb-4 overflow-hidden rounded">
                                <img
                                    src={data.image}
                                    alt=""
                                    className="w-full"
                                />
                            </div>
                            <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                {data.category}
                            </span>
                            <h1 className="text-xl md:text-2xl font-semibold max-w-lg leading-relaxed my-2 md:my-5">
                                {data.title}
                            </h1>
                            <p className="mb-2 md:mb-5 line-clamp-2 leading-relaxed text-xs md:text-sm max-w-md">
                                {data.excerpt}
                            </p>
                            <div className="flex items-center gap-2 ">
                                <img
                                    src={data.author.avatar}
                                    className="rounded-full w-10 h-10"
                                    alt=""
                                />
                                <h1 className="font-medium text-sm">
                                    {data.author.name}
                                </h1>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorNewsSection;

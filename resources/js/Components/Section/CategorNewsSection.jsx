import React from "react";

const CategorNewsSection = ({ name, news }) => {
    return (
        <section className="py-12 text-neutral-800 dark:text-white">
            <div className="container">
                <div className="md:px-4 mb-4 md:mb-6">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        {name}
                    </h1>
                </div>
                <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {news.slice(0, 4).map((data, index) => (
                        <a href="/" className="mb-10 md:mb-0" key={index}>
                            <div className="relative mb-4 md:mb-6 rounded overflow-hidden">
                                <img src={data.image} alt="" />
                            </div>
                            <h5 className="text-xs font-medium mb-2 md:mb-4 text-blue-600 dark:text-blue-400">
                                {data.category}
                            </h5>
                            <h1 className="text-lg md:text-xl font-semibold max-w-lg leading-relaxed mb-2 line-clamp-2 md:mb-5">
                                {data.title}
                            </h1>
                            <div className="flex items-center gap-2 ">
                                <img
                                    src={data.author.avatar}
                                    className="rounded-full w-7 h-7"
                                    alt=""
                                />
                                <h1 className="font-medium text-xs">
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

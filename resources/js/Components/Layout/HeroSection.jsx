import React, { useEffect, useState } from "react";

const HeroSection = ({ news }) => {
    const [mainNews, setMainNews] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setMainNews((prevIndex) => (prevIndex + 1) % news.length);
                    return 0;
                }
                return prev + 1;
            });
        }, 200);

        return () => clearInterval(progressInterval);
    }, [news.length]);

    return (
        <div className="md:px-4 flex flex-wrap items-center">
            <div className="w-full md:w-3/5 mb-5 md:mb-0">
                <div className="w-full h-[500px] relative rounded-md overflow-hidden">
                    <img
                        src={news[mainNews].image}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-5 left-5">
                        <div className="flex items-center text-white text-xs md:text-sm font-medium mb-4">
                            <span className="text-white bg-blue-600 px-3 py-1.5 rounded-full me-2">
                                {news[mainNews].category}
                            </span>
                            {"•"}
                            <span className="ps-2">
                                {news[mainNews].published_at}
                            </span>
                        </div>
                        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold max-w-2xl lg:leading-relaxed text-white">
                            {news[mainNews].title}
                        </h1>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                        <div
                            className="h-full bg-blue-600 transition-all"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full md:w-2/5 md:px-4">
                {news.map((item, index) => (
                    <div
                        onClick={() => setMainNews(index)}
                        key={index}
                        className={`flex items-center px-1 md:px-5 py-4 mb-1 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-700 rounded-md text-neutral-800 dark:text-white ${
                            mainNews == index &&
                            "bg-neutral-300 dark:bg-neutral-700"
                        }`}
                    >
                        <div className="flex-shrink-0 text-center w-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium">
                                {index + 1}
                            </h1>
                        </div>
                        <div className="flex-1 ps-4 space-y-1">
                            <h1 className="line-clamp-1 text-lg md:text-xl lg:text-2xl font-semibold">
                                {item.title}
                            </h1>
                            <p className="text-xs line-clamp-1 text-neutral-600 dark:text-neutral-400">
                                {item.excerpt}
                            </p>
                            <h2 className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                                {item.author.name}{" "}
                                <span className="px-2 text-xs">•</span>
                                {item.published_at}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSection;

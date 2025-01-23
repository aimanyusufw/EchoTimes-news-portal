import React from "react";
import SmallNewsCard from "../Card/SmallNewsCard";
import { FaCalendar } from "react-icons/fa";

const TrendyNewsSection = ({ news }) => {
    return (
        <section className="py-6 md:py-10 text-neutral-800 dark:text-white">
            <div className="container">
                <div className="md:px-4 mb-4 md:mb-6">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Trandy News
                    </h1>
                </div>
                <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="mb-10 md:mb-0">
                        <div className="relative mb-4 rounded-md overflow-hidden">
                            <img src={news[1].image} alt="" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                            <div className="flex items-center absolute bottom-5 left-5 text-white">
                                <span className="px-3 py-1 bg-blue-500 text-sm font-medium rounded-full me-2">
                                    {news[1].category}
                                </span>
                                {"•"}
                                <div className="flex items-center ms-2">
                                    <FaCalendar className="text-white w-3 h-3" />
                                    <span className="ms-2 text-xs">
                                        {news[1].published_at}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold max-w-lg leading-relaxed mb-2">
                            {news[1].title}
                        </h1>
                        <p className="line-clamp-2 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-4 md:mb-6 lg:leading-relaxed">
                            {news[1].excerpt}
                        </p>
                        <div className="flex items-center gap-2 md:gap-4">
                            <img
                                src={news[1].author.avatar}
                                className="rounded-full w-10 h-10"
                                alt=""
                            />
                            <h1 className="font-medium text-sm">
                                {news[1].author.name}
                            </h1>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between gap-8">
                        {news.slice(2, 5).map((item, index) => (
                            <SmallNewsCard item={item} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrendyNewsSection;

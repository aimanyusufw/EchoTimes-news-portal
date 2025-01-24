import React from "react";
import SmallNewsCard from "../Card/SmallNewsCard";

const RecomendNewsSection = ({ news }) => {
    return (
        <section className="py-12 text-neutral-800 dark:text-white">
            <div className="container">
                <div className="md:px-4 mb-4 md:mb-6">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        News Might You Like
                    </h1>
                </div>
                <div className="md:px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col justify-between gap-8 lg:col-span-2">
                        {news.map((item, index) => (
                            <SmallNewsCard item={item} key={index} />
                        ))}
                    </div>
                    <div className="relative">
                        <div className="w-full h-64 flex justify-center items-center bg-neutral-200 dark:bg-neutral-500 md:sticky top-5">
                            <span className="text-xs md:text-sm">
                                Advertisement
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RecomendNewsSection;

import React from "react";

const SmallNewsCard = ({ item }) => {
    return (
        <div className={`flex items-start`}>
            <div className="flex-shrink-0 text-center w-2/5">
                <img src={item.image} alt="" className="rounded-md" />
            </div>
            <div className="flex-1 ps-4 space-y-3">
                <h1 className="text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2">
                    {item.title}
                </h1>
                <p className="text-xs line-clamp-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {item.excerpt}
                </p>
                <h2 className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                    {item.author.name} <span className="px-2 text-xs">•</span>
                    {item.published_at}
                </h2>
            </div>
        </div>
    );
};

export default SmallNewsCard;

import React from "react";
import CategoryCard from "../Card/CategoryCard";

const DiscoverNewsSection = ({ category }) => {
    return (
        <section className="py-12 text-neutral-800 dark:text-white">
            <div className="container">
                <div className="md:px-4 mb-4 md:mb-6">
                    <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Discover Our News
                    </h1>
                </div>
                <div className="px-2 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
                    {category.map((data, index) => (
                        <CategoryCard item={data} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverNewsSection;

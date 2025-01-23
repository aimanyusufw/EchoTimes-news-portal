import React from "react";

const CategoryCard = ({ item }) => {
    return (
        <a href="/">
            <div
                className="w-full h-[300px] md:h-[400px] overflow-hidden bg-center bg-cover rounded-xl relative bg-black"
                style={{ backgroundImage: `url(${item.image})` }}
            >
                <div className="absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                    <h1 className="z-10 font-inria-serif font-bold text-2xl text-white text-center leading-normal">
                        {item.name}
                    </h1>
                </div>
            </div>
        </a>
    );
};

export default CategoryCard;

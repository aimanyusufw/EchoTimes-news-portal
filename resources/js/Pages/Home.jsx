import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";
import { headerNews } from "../Dummy/data";
import HeroSection from "../Components/Layout/HeroSection";
import { FaCalendar } from "react-icons/fa6";

export default function Home() {
    return (
        <BaseLayouts>
            <section className="md:pt-36 md:pb-8">
                <div className="container">
                    <BreadCrumb data={[{ name: "News", url: "/" }]} />
                    <HeroSection news={headerNews} />
                </div>
            </section>
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
                                <img src={headerNews[1].image} alt="" />
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <div className="flex items-center absolute bottom-5 left-5 text-white">
                                    <span className="px-3 py-1 bg-blue-500 text-sm font-medium rounded-full me-2">
                                        {headerNews[1].category}
                                    </span>
                                    {"•"}
                                    <div className="flex items-center ms-2">
                                        <FaCalendar className="text-white w-3 h-3" />
                                        <span className="ms-2 text-xs">
                                            {headerNews[1].published_at}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-2xl font-semibold max-w-lg leading-relaxed mb-2">
                                {headerNews[1].title}
                            </h1>
                            <p className="line-clamp-2 text-xs md:text-sm font-medium text-neutral-600 dark:text-neutral-300 mb-4 md:mb-6 lg:leading-relaxed">
                                {headerNews[1].excerpt}
                            </p>
                            <div className="flex items-center gap-2 md:gap-4">
                                <img
                                    src={headerNews[1].author.avatar}
                                    className="rounded-full w-10 h-10"
                                    alt=""
                                />
                                <h1 className="font-medium text-sm">
                                    {headerNews[1].author.name}
                                </h1>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between gap-8">
                            {headerNews.slice(2, 5).map((item, index) => (
                                <div key={index} className={`flex items-start`}>
                                    <div className="flex-shrink-0 text-center w-2/5">
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="rounded-md"
                                        />
                                    </div>
                                    <div className="flex-1 ps-4 space-y-4">
                                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold line-clamp-2">
                                            {item.title}
                                        </h1>
                                        <p className="text-xs line-clamp-2 leading-relaxed text-neutral-600 dark:text-neutral-300">
                                            {item.excerpt}
                                        </p>
                                        <h2 className="text-xs font-medium text-neutral-600 dark:text-neutral-300">
                                            {item.author.name}{" "}
                                            <span className="px-2 text-xs">
                                                •
                                            </span>
                                            {item.published_at}
                                        </h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </BaseLayouts>
    );
}

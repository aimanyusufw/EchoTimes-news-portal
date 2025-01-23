import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";
import { headerNews, newsCategory } from "../Dummy/data";
import HeroSection from "../Components/Layout/HeroSection";
import TrendyNewsSection from "../Components/Section/TrendyNewsSection";

export default function Home() {
    return (
        <BaseLayouts>
            <section className="md:pt-36 md:pb-8">
                <div className="container">
                    <BreadCrumb data={[{ name: "News", url: "/" }]} />
                    <HeroSection news={headerNews} />
                </div>
            </section>
            <TrendyNewsSection news={headerNews} />
            <section className="py-12 text-neutral-800 dark:text-white">
                <div className="container">
                    <div className="md:px-4 mb-4 md:mb-6">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                            Discover Our News
                        </h1>
                    </div>
                    <div class="px-2 py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-10">
                        {newsCategory.slice(1, 5).map((data, index) => (
                            <CategoryCard item={data} key={index} />
                        ))}
                    </div>
                </div>
            </section>
        </BaseLayouts>
    );
}

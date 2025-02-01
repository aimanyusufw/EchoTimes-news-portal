import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";
import { headerNews, newsCategory } from "../Dummy/data";
import HeroSection from "../Components/Layout/HeroSection";
import TrendyNewsSection from "../Components/Section/TrendyNewsSection";
import DiscoverNewsSection from "../Components/Section/DiscoverNewsSection";
import RecomendNewsSection from "../Components/Section/RecomendNewsSection";
import CategorNewsSection from "../Components/Section/CategorNewsSection";

export default function Home({ categories, headerPost }) {
    return (
        <BaseLayouts categories={categories}>
            <section className="md:pt-36 md:pb-8">
                <div className="container">
                    <BreadCrumb data={[{ name: "News", url: "/" }]} />
                    <HeroSection news={headerPost} />
                </div>
            </section>
            <TrendyNewsSection news={headerNews} />
            <DiscoverNewsSection category={newsCategory} />
            <RecomendNewsSection news={[...headerNews, ...headerNews]} />
            <CategorNewsSection name={"Finance News"} news={headerNews} />
            <CategorNewsSection name={"Sport News"} news={headerNews} />
            <CategorNewsSection name={"Technology News"} news={headerNews} />
        </BaseLayouts>
    );
}

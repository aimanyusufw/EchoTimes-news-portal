import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";
import { headerNews, newsCategory } from "../Dummy/data";
import HeroSection from "../Components/Layout/HeroSection";
import TrendyNewsSection from "../Components/Section/TrendyNewsSection";
import DiscoverNewsSection from "../Components/Section/DiscoverNewsSection";
import RecomendNewsSection from "../Components/Section/RecomendNewsSection";

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
            <DiscoverNewsSection category={newsCategory} />
            <RecomendNewsSection news={[...headerNews, ...headerNews]} />
        </BaseLayouts>
    );
}

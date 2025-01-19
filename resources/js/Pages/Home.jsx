import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";
import { headerNews } from "../Dummy/data";
import HeroSection from "../Components/Layout/HeroSection";

export default function Home() {
    return (
        <BaseLayouts>
            <section className="pt-36 pb-8">
                <div className="container">
                    <BreadCrumb data={[{ name: "News", url: "/" }]} />
                    <HeroSection news={headerNews} />
                </div>
            </section>
        </BaseLayouts>
    );
}

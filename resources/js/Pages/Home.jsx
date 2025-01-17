import React from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import BreadCrumb from "../Components/Partials/BreadCrumb";

export default function Home() {
    return (
        <BaseLayouts>
            <section className="pt-36 pb-8">
                <div className="container">
                    <div className="md:px-4">
                        <BreadCrumb data={[{ name: "News", url: "/" }]} />
                    </div>
                </div>
            </section>
        </BaseLayouts>
    );
}

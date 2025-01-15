import React, { useState } from "react";
import BaseLayouts from "@/Layouts/BaseLayouts";
import { FaHome } from "react-icons/fa";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <BaseLayouts>
            <section className="pt-36 pb-8">
                <div className="container">
                    <div className="md:px-4">
                        <h1 className="text-black dark:text-white">
                            Hello World
                        </h1>
                    </div>
                </div>
            </section>
        </BaseLayouts>
    );
}

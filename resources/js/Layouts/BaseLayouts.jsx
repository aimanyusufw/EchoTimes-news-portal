import React from "react";
import Header from "@/Components/Layout/Header";
import Footer from "../Components/Layout/Footer";

const BaseLayouts = ({ children, categories }) => {
    return (
        <>
            <Header categories={categories} />
            <main className="min-h-screen bg-neutral-100 dark:bg-neutral-800">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default BaseLayouts;

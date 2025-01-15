import React from "react";
import Header from "@/Components/Layout/Header";

const BaseLayouts = ({ children }) => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-neutral-100 dark:bg-neutral-800">
                {children}
            </main>
        </>
    );
};

export default BaseLayouts;

"use client";

import { useEffect } from "react";

export default function DarkLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        // add class to html when entering dark page
        document.documentElement.classList.add("pixora-dark");

        // class remove when exiting dark page
        return () => {
            document.documentElement.classList.remove("pixora-dark");
        };
    }, []);

    return <>{children}</>;
}

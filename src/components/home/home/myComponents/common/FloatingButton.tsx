"use client";

import { useEffect, useState } from "react";
import { useQuoteModal } from "../Content/QuoteContext";

export default function FloatingQuoteButton() {
    const [showButton, setShowButton] = useState(false);
    const [footerReached, setFooterReached] = useState(false);
    const { openModal } = useQuoteModal();

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    useEffect(() => {
        const footer = document.querySelector("footer");

        if (!footer) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setFooterReached(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    return (
        <button
            type="button"
            className={`floating-quote-btn ${showButton ? "show" : ""} ${footerReached ? "footer-reached" : ""}`}
            onClick={openModal}
        >
            Get a Free Quote
        </button>
    );
}
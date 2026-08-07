"use client";

import { useEffect, useState } from "react";
import { useQuoteModal } from "../Content/QuoteContext";

export default function FloatingQuoteButton() {
    const [showButton, setShowButton] = useState(false);
    const { openModal } = useQuoteModal();

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            className={`floating-quote-btn ${showButton ? "show" : ""}`}
            onClick={openModal}
        >
            Get Quotes
        </button>
    );
}
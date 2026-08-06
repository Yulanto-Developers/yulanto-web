"use client";

import { createContext, useContext, useState } from "react";

const QuoteContext = createContext<any>(null);

export function QuoteProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <QuoteContext.Provider
            value={{
                open,
                openModal: () => setOpen(true),
                closeModal: () => setOpen(false),
            }}
        >
            {children}
        </QuoteContext.Provider>
    );
}

export const useQuoteModal = () => useContext(QuoteContext);
"use client";

import {
    createContext,
    useContext,
    useState,
} from "react";


type OpenType = "auto" | "manual";


interface QuoteContextType {

    open: boolean;

    openType: OpenType | null;

    openModal: (
        type?: OpenType
    ) => void;

    closeModal: () => void;
}


const QuoteContext =
    createContext<QuoteContextType | null>(
        null
    );


export function QuoteProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    const [open, setOpen] =
        useState(false);


    const [openType, setOpenType] =
        useState<OpenType | null>(null);


    const openModal = (
        type: OpenType = "manual"
    ) => {

        setOpenType(type);

        setOpen(true);
    };


    const closeModal = () => {

        setOpen(false);

        setOpenType(null);
    };


    return (

        <QuoteContext.Provider
            value={{
                open,
                openType,
                openModal,
                closeModal,
            }}
        >

            {children}

        </QuoteContext.Provider>
    );
}


export const useQuoteModal = () => {

    const context =
        useContext(QuoteContext);


    if (!context) {

        throw new Error(
            "useQuoteModal must be used inside QuoteProvider"
        );
    }


    return context;
};
"use client";

import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";

import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";

import {
    QuoteProvider,
} from "@/components/home/home/myComponents/Content/QuoteContext";

import QuoteModal from "@/components/home/home/myComponents/Pop";

import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";

import PortfolioModalCards from "@/components/home/home/workComponents/portfolioModal";

import {
    PortfolioModalProvider,
} from "@/components/home/home/workComponents/PortfolioModalContext";

import "@/assets/css/style.css";

export default function DesignStudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QuoteProvider>
            <ClientProviders>

                <PortfolioModalProvider>

                    <PersonalPortfolioHeader />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">

                            {children}

                            <MainFooter />

                        </div>
                    </div>

                    {/* Floating actions */}
                    <FloatingActionsWrapper />

                    {/* Quote modal */}
                    <QuoteModal />

                    {/* Floating quote button */}
                    <FloatingQuoteButton />

                    {/* Portfolio modal */}
                    <PortfolioModalWrapper />

                </PortfolioModalProvider>

            </ClientProviders>
        </QuoteProvider>
    );
}


/*
 * Portfolio Modal lives in the layout.
 */
function PortfolioModalWrapper() {
    return <PortfolioModalCards />;
}
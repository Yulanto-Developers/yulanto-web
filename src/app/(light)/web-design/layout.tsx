"use client";

import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";


import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";

import {
    QuoteProvider,
} from "@/components/home/home/myComponents/Content/QuoteContext";

import QuoteModal from "@/components/home/home/myComponents/Pop";

import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";

 
import "@/assets/css/style.css";


export default function DesignStudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <QuoteProvider>
           

              

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

                   
        </QuoteProvider>
    );
}



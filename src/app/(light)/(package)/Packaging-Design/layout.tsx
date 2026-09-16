"use client";

import React from "react";
import { MainFooter } from "@/components/layout";
import PersonalPortfolioHeader from "@/components/layout/headers/PersonalPortfolioHeader";
import { ClientProviders } from "@/providers";
import FloatingActionsWrapper from "@/components/home/home/components/FloatingIcon";
import { QuoteProvider } from "@/components/home/home/myComponents/Content/QuoteContext";
import QuoteModal from "@/components/home/home/myComponents/Pop";
import FloatingQuoteButton from "@/components/home/home/myComponents/common/FloatingButton";
import "@/assets/css/style.css";
import "@/assets/css/custome.css";

export default function DesignStudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QuoteProvider>
      <ClientProviders>
        <PersonalPortfolioHeader />

        {/* FIXED: Added overflow: hidden / position relative to wrapper to prevent height collapsing */}
        <div 
          id="smooth-wrapper" 
          style={{ 
            backgroundColor: "#f5f5f5", 
            overflow: "hidden", 
            position: "relative",
            width: "100%" 
          }}
        >
          {/* FIXED: Added minHeight and padding-bottom so content length is fully measured */}
          <div 
            id="smooth-content" 
            style={{ 
              overflow: "visible", 
              minHeight: "100vh",
              position: "relative" 
            }}
          >
            {children}
            <MainFooter />
          </div>
        </div>

        {/* Renders safely outside the scroll wrapper track */}
        <FloatingActionsWrapper />
        <QuoteModal />
        <FloatingQuoteButton />
      </ClientProviders>
    </QuoteProvider>
  );
}
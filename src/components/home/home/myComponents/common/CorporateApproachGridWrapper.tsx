"use client";

import { ClientProviders } from "@/providers";
import CorporateApproachGrid from "./CorporateApproachGrid";

interface CorporateApproachItem {
    id: number;
    mainCategory: string;
    category: string;
    title: string;
    description: string;
    image: any;
    size: "large" | "small";
}

interface CorporateApproachGridWrapperProps {
    items: CorporateApproachItem[];
}

export default function CorporateApproachGridWrapper({
    items,
}: CorporateApproachGridWrapperProps) {
    return (
        <ClientProviders>
            <CorporateApproachGrid items={items} />
        </ClientProviders>
    );
}
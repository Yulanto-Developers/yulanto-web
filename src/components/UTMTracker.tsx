"use client";

import { useEffect } from "react";
import { captureUtf } from "@/lib/utm";

export default function UTMTracker() {
    useEffect(() => {
        captureUtf();
    }, []);

    return null;
}
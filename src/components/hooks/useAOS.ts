// hooks/useAOS.ts
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

let isInitialized = false;

export const useAOS = () => {
  useEffect(() => {
    // Only initialize once
    if (!isInitialized && typeof window !== "undefined") {
      AOS.init({
        duration: 800,
        once: true,
        offset: 50,
        easing: "ease-in-out",
        mirror: false,
        disable: "mobile", // Disable on mobile for performance
      });
      isInitialized = true;

      // Refresh after a small delay to ensure all elements are rendered
      setTimeout(() => {
        AOS.refresh();
      }, 200);
    }
  }, []);

  // Refresh AOS when component updates
  useEffect(() => {
    if (typeof window !== "undefined" && isInitialized) {
      AOS.refresh();
    }
  });
};

"use client";
import { useEffect } from "react";

type BackgroundConfig = {
  bgColor?: string;
  bgImage?: string;
  bodyClass?: string;
};

export const usePageBackground = ({
  bgColor,
  bgImage,
  bodyClass,
}: BackgroundConfig = {}) => {
  useEffect(() => {
    const body = document.body;

    // Store previous values
    const previousBgColor = body.style.backgroundColor;
    const previousBgImage = body.style.backgroundImage;

    // Apply background color
    if (bgColor) {
      body.style.backgroundColor = bgColor;
    }

    // Apply background image
    if (bgImage) {
      body.style.backgroundImage = `url(${bgImage})`;
    }

    // Add class safely
    if (bodyClass) {
      body.classList.add(bodyClass);
    }

    return () => {
      body.style.backgroundColor = previousBgColor;
      body.style.backgroundImage = previousBgImage;

      if (bodyClass) {
        body.classList.remove(bodyClass);
      }
    };
  }, [bgColor, bgImage, bodyClass]);
};
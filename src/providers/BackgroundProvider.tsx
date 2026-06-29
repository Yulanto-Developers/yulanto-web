"use client";
import { usePageBackground } from "@/hooks/usePageBackground";
import { ReactNode } from "react";

type BackgroundProviderProps = {
  children: ReactNode;
  bgColor?: string;
  bgImage?: string;
  bodyClass?: string;
};

export default function BackgroundProvider({
  children,
  bgColor,
  bgImage,
  bodyClass,
}: BackgroundProviderProps) {
  usePageBackground({ bgColor, bgImage, bodyClass });

  return <>{children}</>;
}
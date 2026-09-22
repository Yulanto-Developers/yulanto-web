"use client";

import {
  AppProvider,
  BootstrapProvider,
  ScrollSmoothProvider,
  VideoProvider,
} from "@/providers";

import BackToTop from "@/components/shared/BackToTop/BackToTop";
import { AnimationWrapper } from "@/components/wrappers";
import ScrollToTopProvider from "./ScrollToTopProvider";

import { useParams } from "next/navigation";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { useState } from "react";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  const url = useParams();

  // Create QueryClient only once
  const [queryClient] = useState(
    () => new QueryClient()
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>

        <BootstrapProvider>

          {url.pages === "website-creation-company-in-Chennai" ? (

            <ScrollToTopProvider>

              <VideoProvider>

                <AnimationWrapper>

                  {/* Global UI Elements */}

                  <div className="px-blur-bottom" />

                  <BackToTop />

                  {children}

                </AnimationWrapper>

              </VideoProvider>

            </ScrollToTopProvider>

          ) : (

            <ScrollSmoothProvider>

              <ScrollToTopProvider>

                <VideoProvider>

                  <AnimationWrapper>

                    {/* Global UI Elements */}

                    <div className="px-blur-bottom" />

                    <BackToTop />

                    {children}

                  </AnimationWrapper>

                </VideoProvider>

              </ScrollToTopProvider>

            </ScrollSmoothProvider>

          )}

        </BootstrapProvider>

      </AppProvider>
    </QueryClientProvider>
  );
}
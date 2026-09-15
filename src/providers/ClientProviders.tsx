'use client'
import { AppProvider, BootstrapProvider, ScrollSmoothProvider, VideoProvider } from "@/providers";
import BackToTop from "@/components/shared/BackToTop/BackToTop";
import { AnimationWrapper } from "@/components/wrappers";
import ScrollToTopProvider from "./ScrollToTopProvider";
import { useParams } from "next/navigation";

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    const url = useParams();
    // console.log('url fro lay:', JSON.stringify(url));

    return (
        <AppProvider>
            <BootstrapProvider>
                {url.pages === "corporate-website-design" ? (

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
    );
}
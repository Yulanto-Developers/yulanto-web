// Create a central animation configuration object
// Each key represents a route (page path)
// Each value is an array of animation functions to run on that route

import { initFlowImageDistortion } from "@/hooks/useFlowImageDistortion";
import { aboutSkewAnimation, brandSkewAnimation, headerLogoAnimAnimation, initAwardAnimation, initButtonAnimations, initHeroScrollMarqueeAnimation, initHoverImageAnimation, initInnerServiceAnimation, initInstagramAnimation, initPortfolioAnimation, initPortfolioStickyAnimation, initProjectPerspectiveAnimation, initRevealImageAnimation, initRevealTextSplitAnimation, initScrollSkewParallaxSections, initTextRightScrollAnimation, portfolioPanelAnimation, stepScrollPinAnimation, textEffectAnimation } from "@/hooks/useGsapAnimation";


export const animationConfig: Record<string, (() => void)[]> = {
    //Light page animation
    "/startup-agency": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections, textEffectAnimation],
    "/home": [portfolioPanelAnimation, textEffectAnimation],
    "/modern-agency": [textEffectAnimation],
    "/creative-agency": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],
    "/personal-portfolio": [initHoverImageAnimation],
    "/minimal-portfolio": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation,initFlowImageDistortion],
    "/digital-studio": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],
    "/service-1": [stepScrollPinAnimation],
    "/service-2": [initInnerServiceAnimation],
    "/portfolio-1": [headerLogoAnimAnimation],
    "/portfolio-3": [initHoverImageAnimation],
    "/portfolio-6": [portfolioPanelAnimation],
    "/portfolio-details-2": [initRevealImageAnimation],

    //Dark page animation
    "/dark/startup-agency": [aboutSkewAnimation, brandSkewAnimation, initScrollSkewParallaxSections],
    "/dark/design-studio": [portfolioPanelAnimation, textEffectAnimation],
    "/dark/modern-agency": [textEffectAnimation],
    "/dark/creative-agency": [headerLogoAnimAnimation, textEffectAnimation, stepScrollPinAnimation],
    "/dark/personal-portfolio": [initHoverImageAnimation],
    "/dark/minimal-portfolio": [initRevealTextSplitAnimation, initProjectPerspectiveAnimation, initPortfolioStickyAnimation, initRevealImageAnimation, initAwardAnimation],
    "/dark/digital-studio": [initRevealTextSplitAnimation, initHeroScrollMarqueeAnimation, initTextRightScrollAnimation, initPortfolioAnimation, initAwardAnimation, initRevealImageAnimation, initInstagramAnimation, initButtonAnimations],
    "/dark/service-1": [stepScrollPinAnimation],
    "/dark/service-2": [initInnerServiceAnimation],
    "/dark/portfolio-1": [headerLogoAnimAnimation],
    "/dark/portfolio-3": [initHoverImageAnimation],
    "/dark/portfolio-6": [portfolioPanelAnimation],
    "/dark/portfolio-details-2": [initRevealImageAnimation],
}
import React from "react";
import HeroSection from "./hero-section-9";
import { Award, Layers, Sparkles } from "lucide-react";

const HeroSectionDemo = () => {
  const bulletList = [
    "Business Logo Design",
    "Corporate Logo Design",
    "Startup Logo Design",
    "Brand Identity Design",
    "Custom Logo Design",
    "Minimalist Logo Design",
    "Modern Logo Design",
    "Professional Logo Design",
    "Logo Redesign",
    "Logo Refresh",
    "Product Logo Design",
    "Personal Branding Logo",
    "Social Media Logo Design",
    "Print & Digital Logo Design",
  ];

  const heroData = {
    sectionSubtitle: "Logo Design Services in Chennai",
    title: (
      <>
        <span className="text-blue-about">Complete Creative </span> Branding Support
      </>
    ),
    subtitle:
      "We provide professional logo design solutions for businesses at different stages of growth. Whether you need a simple business logo or a complete visual identity, our team can create a design aligned with your requirements.",
    
    images: [
      "assets/img/logodesign/logo-srvices/logo-srvices-1.jpg",
      "assets/img/logodesign/logo-srvices/logo-srvices-2.jpg",
      "assets/img/logodesign/logo-srvices/logo-srvices-3.jpg",
      "assets/img/logodesign/logo-srvices/logo-srvices-4.jpg",
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <HeroSection
        sectionSubtitle={heroData.sectionSubtitle}
        title={heroData.title}
        subtitle={heroData.subtitle}
        bulletPoints={bulletList}
        images={heroData.images}
      />
    </div>
  );
};

export default HeroSectionDemo;
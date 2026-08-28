import React from "react";
import HeroSection from "./hero-section-9";
import { Award, Layers, Sparkles } from "lucide-react";

const HeroSectionDemo = () => {
  const heroData = {
    sectionSubtitle: "LOGO AS A BRANDING TOOL",
    title: (
      <>
        <span className="text-blue-about">What Goes Into Making</span> That Ideal Logo
      </>
    ),
    subtitle:
      "We are one of the top logo design company in Chennai, dedicating significant design efforts to craft the ideal logo for your brand. Our logos are not only eye-catching but also enduring. Creating a logo demands a creative flair, encompassing expertise in wordplay, color schemes, image curation, abstract ideation, font selection, and more.",
    bulletPoints: [
      "Proficient Understanding of Word Styles and Design",
      "Generating Images that Align with Business Nature",
      "Incorporating Company's Goals into the Logo Design",
      "Unique and Creative Concepts that Go Beyond Traditional Approaches",
      "Showcasing the Distinctiveness of the Business Project",
    ],
    stats: [
      {
        value: "500+",
        label: "Logos Designed",
        icon: <Award style={{ height: "20px", width: "20px", color: "#6b7280" }} />,
      },
      {
        value: "100%",
        label: "Custom Concepts",
        icon: <Sparkles style={{ height: "20px", width: "20px", color: "#6b7280" }} />,
      },
      {
        value: "10+",
        label: "Years Experience",
        icon: <Layers style={{ height: "20px", width: "20px", color: "#6b7280" }} />,
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    ],
  };

  return (
    <div style={{ width: "100%" }}>
      <HeroSection
        sectionSubtitle={heroData.sectionSubtitle}
        title={heroData.title}
        subtitle={heroData.subtitle}
        bulletPoints={heroData.bulletPoints}
        stats={heroData.stats}
        images={heroData.images}
      />
    </div>
  );
};

export default HeroSectionDemo;
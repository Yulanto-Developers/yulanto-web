"use client";

import React, { ReactNode } from "react";
import "./whychoose.css";
import { useAOS } from "@/components/hooks/useAOS";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import whychoosseData, { WhyChooseItem } from "./whychoosedata";

import {
  Palette,
  Lightbulb,
  Sliders,
  Users,
  Clock,
  Headphones
} from "lucide-react";

const iconMap: Record<number, ReactNode> = {
  1: <Palette />,
  2: <Lightbulb />,
  3: <Sliders />,
  4: <Users />,
  5: <Clock />,
  6: <Headphones />,
};

interface WhyChooseA2Props {
  data?: WhyChooseItem[];
}

const WhyChooseA2: React.FC<WhyChooseA2Props> = ({ data = whychoosseData }) => {
  useAOS();

  return (
    <section className="whychooseA2-section" id="why-choose-us">
      <div className="container">
        <SectionTitle
          subtitle="Why Choose Yulanto?"
          titleFirst="We Create"
          titleSecond="Meaningful Websites"
          description="At Yulanto, we create high-performance websites and digital solutions that add real value to your products and services. Our goal is to strengthen your online presence, engage your audience, and support sustainable business growth."
          animationType="text-reveal-lines"
          delay={300}
        />

        <div className="row g-4 whychooseA2-row">
          {data.map((item: WhyChooseItem, index: number) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={(index * 100 + 200).toString()}
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="whychooseA2-card">
                {/* Image & Floating Pill Badges */}
                <div className="whychooseA2-card-image-wrap">
                  <img
                    src={item.image || "/assets/images/whychoose/quality-design.jpg"}
                    alt={item.title}
                    className="whychooseA2-card-image"
                  />
                  
                  <div className="whychooseA2-badges-overlay">
                    <span className="whychooseA2-badge-pill">
                      {iconMap[item.id] || <Palette />}
                      {item.badgeText || "Featured"}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="whychooseA2-card-body">
                  <h3 className="whychooseA2-title">{item.title}</h3>
                  <p className="whychooseA2-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseA2;
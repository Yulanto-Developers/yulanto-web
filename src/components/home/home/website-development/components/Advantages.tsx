"use client";

import React from "react";
import { useAOS } from "../../../../hooks/useAOS";
import SectionTitle from "../../../../sectiontitle/SectionTitle";
import advantagesData from "./advantagesdata";

type AdvantageItem = {
    id: string;
    title: string;
    description: string;
};

type AdvantagesProps = {
    items?: AdvantageItem[];
    heading?: string;
    subtitle?: string;
};

const AdvantageRow = ({ item, index }: { item: AdvantageItem; index: number }) => (
    <div
        className="advantage-item"
        data-aos="fade-up"
        data-aos-delay={index * 50}
        data-aos-duration="800"
        data-aos-offset="150"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        suppressHydrationWarning
    >
        <span className="advantage-number">{item.id}</span>
        <div>
            <h4 className="advantage-title">{item.title}</h4>
            <p className="advantage-description">{item.description}</p>
        </div>
    </div>
);

const Advantages = ({
    items = advantagesData,
    subtitle = "Features"
}: AdvantagesProps) => {
    useAOS();

    return (
        <>
            <style jsx global>{`
        /* Outer section is transparent/default */
        .advantages-section {
          padding: 10px 0 80px;
          background: transparent;
        }

        /* Solid blue container block */
        .advantages-card-container {
          background-color: #053456;
          border-radius: 12px;
        }

        /* List Item Styling */
        .advantage-item {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          padding: 24px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          transition: background-color 0.3s ease;
          border-radius: 6px;
        }

        .advantage-item:first-child {
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .advantage-item:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        /* Number & Text Styling */
        .advantage-number {
          font-size: 1.25rem;
          font-weight: 700;
          color: #53ae7d;
          min-width: 40px;
          flex-shrink: 0;
        }

        .advantage-title {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .advantage-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 767px) {
          .advantages-section {
            padding: 50px 0;
          }
          .advantages-card-container {
            padding: 24px 16px;
          }
          .advantage-item {
            gap: 16px;
            padding: 20px 8px;
          }
          .advantage-title {
            font-size: 1.1rem;
          }
          .advantage-description {
            font-size: 0.9rem;
          }
        }
      `}</style>

            <section className="advantages-section">
                <SectionTitle
                    subtitle={subtitle}
                    titleFirst="Advantages Of Dynamic"
                    titleSecond="Web Designing?"
                    description="Each section of the webpage is distinct in a dynamic website, making it convenient to apply updates across various pages simultaneously."
                    delay={300}
                />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="advantages-card-container">
                                {items.map((item, index) => (
                                    <AdvantageRow key={item.id} item={item} index={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Advantages;
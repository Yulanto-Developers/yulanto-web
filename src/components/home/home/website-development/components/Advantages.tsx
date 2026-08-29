"use client";

import React from "react";
import { useAOS } from "../../../../hooks/useAOS";

type AdvantageItem = {
  id: string;
  title: string;
  description: string[] | string;
};

const AdvantageRow = ({
  item,
  index,
}: {
  item: AdvantageItem;
  index: number;
}) => (
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

      {Array.isArray(item.description) ? (
        item.description.map((description, index) => (
          <p className="advantage-description" key={index}>
            {description}
          </p>
        ))
      ) : (
        <p className="advantage-description">{item.description}</p>
      )}
    </div>
  </div>
);

const Advantages = ({ items }: { items: AdvantageItem[] }) => {
  useAOS();

  return (
    <>
      <style jsx global>{`
        .advantages-section {
          padding: 10px 0 30px;
          background: transparent;
        }

        .advantages-card-container {
          background-color: #053456;
          border-radius: 12px;
          padding: 40px;
        }

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
          margin: 0 0 12px;
        }

        .advantage-description:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 767px) {
          .advantages-section {
            padding: 40px 0;
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
        <div className="container">

          <h4 className="px-about-title mb-20 text-center">
            <span className="text-blue-about">Features of Dynamic </span> Website Development
          </h4>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="advantages-card-container">
                {items.map((item, index) => (
                  <AdvantageRow
                    key={item.id}
                    item={item}
                    index={index}
                  />
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
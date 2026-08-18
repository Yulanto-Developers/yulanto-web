"use client";

import React from "react";
import ZigzagCard from "./ZigzagCard";
import "@/assets/css/style.css";

type ZigzagCardItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type ZigzagCardsProps = {
  cards?: ZigzagCardItem[];
  pin?: string;
};

const ZigzagCards = ({
  cards = [],
  pin = "/assets/images/pin.png",
}: ZigzagCardsProps) => {
  if (!cards.length) return null;

  return (
    <section className="zigzag-section container py-60">
      <div className="zigzag-wrapper">
        <div className="zigzag-grid">
          {cards.map((item) => (
            <ZigzagCard key={item.id} item={item} pin={pin} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(ZigzagCards);
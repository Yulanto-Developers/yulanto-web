"use client";

import Image from "next/image";
import React from "react";

interface ZigzagCardProps {
  item: {
    id: number;
    title: string;
    description: string;
    image: string;
  };
  pin: string;
}

const ZigzagCard = ({ item, pin }: ZigzagCardProps) => {
  return (
    <div className="card-item">
      <div className="card zigzag-card">
        <Image
          src={pin}
          alt="Pin"
          width={32}
          height={32}
          className="card-pin"
          priority={item.id <= 2}
        />

        <div className="card-body text-start">
          <h3 className="card-title">{item.title}</h3>
          <p className="card-text">{item.description}</p>
        </div>

        <img
          src={item.image}
          alt={item.title}
          className="card-img-bottom"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default React.memo(ZigzagCard);
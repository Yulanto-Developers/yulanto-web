"use client";

import React from "react";
import styles from "./GalleryGrid.module.css";
import Image from "next/image";

interface GalleryItemProps {
  src: string;
  alt: string;
  type: "landscape" | "portrait" | "square";
  className?: string;
}

const GalleryItem = ({
  src,
  alt,
  type,
  className = "",
}: GalleryItemProps) => {

  // console.log("GalleryItem RENDERED");
  // console.log("src:", src);
  // console.log("alt:", alt);
  // console.log("type:", type);

  const getHeightClass = () => {
    switch (type) {
      case "landscape":
        return styles["our-st-gly-landscape"];

      case "portrait":
        return styles["our-st-gly-portrait"];

      case "square":
        return styles["our-st-gly-square"];

      default:
        return styles["our-st-gly-landscape"];
    }
  };

  return (
    <>
      <a
        href={src}
        className={`glightbox ${styles["our-st-gly-item"]} ${getHeightClass()} ${className}`}
        data-type="image"
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
        />
        <div className={styles["our-st-gly-overlay"]} />
      </a>
    </>
  );
};

export default GalleryItem;
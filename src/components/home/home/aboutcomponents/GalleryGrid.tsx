"use client";

import React, { useEffect } from "react";
import GalleryItem from "./GalleryItem";
import "./GalleryGrid.module.css";
import SectionTitle from "@/components/sectiontitle/SectionTitle";
import image1 from "@/assets/images/ourstory/infrastructure-1.jpg"
import image2 from "@/assets/images/ourstory/infrastructure-2.jpg"
import image3 from "@/assets/images/ourstory/infrastructure-3.jpg"
import image4 from "@/assets/images/ourstory/infrastructure-4.jpg"
import image5 from "@/assets/images/ourstory/infrastructure-5.jpg"
import image6 from "@/assets/images/ourstory/infrastructure-6.jpg"
import image7 from "@/assets/images/ourstory/infrastructure-7.jpg"

interface GalleryImage {
  id: string | number;
  src: string;
  alt: string;
  type: "landscape" | "portrait" | "square";
  colClasses: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  containerClass?: string;
  rowClass?: string;
}

const defaultImages: GalleryImage[] = [
  {
    id: 1,
    src: image1.src,
    alt: "Gallery image 1",
    type: "landscape",
    colClasses: "col-lg-8",
  },
  {
    id: 2,
    src: image2.src,
    alt: "Gallery image 2",
    type: "portrait",
    colClasses: "col-lg-4",
  },
  {
    id: 3,
    src: image3.src,
    alt: "Gallery image 3",
    type: "portrait",
    colClasses: "col-lg-4",
  },
  {
    id: 4,
    src: image4.src,
    alt: "Gallery image 4",
    type: "landscape",
    colClasses: "col-lg-8",
  },
  {
    id: 5,
    src: image5.src,
    alt: "Gallery image 5",
    type: "square",
    colClasses: "col-md-4",
  },
  {
    id: 6,
    src: image6.src,
    alt: "Gallery image 6",
    type: "square",
    colClasses: "col-md-4",
  },
  {
    id: 7,
    src: image7.src,
    alt: "Gallery image 7",
    type: "square",
    colClasses: "col-md-4",
  },
];

const GalleryGrid = ({
  images = defaultImages,
  containerClass = "container py-3",
  rowClass = "row g-4 mt-2",
}: GalleryGridProps) => {

  useEffect(() => {
    let destroyLightbox: (() => void) | undefined;

    const initLightbox = async () => {
      try {
        const { default: GLightbox } = await import("glightbox");

        const lightbox = GLightbox({
          selector: ".glightbox",
          touchNavigation: true,
          loop: true,
          zoomable: true,
          draggable: true,
          moreText: '', // Empty string to hide the description
        });

        destroyLightbox = () => {
          lightbox.destroy();
        };
      } catch (error) {
        console.error("Failed to initialize GLightbox:", error);
      }
    };

    initLightbox();

    return () => {
      destroyLightbox?.();
    };
  }, []);

  return (
    <div className={containerClass}>

      <SectionTitle
        subtitle="Our Infrastructure"
        titleFirst="Our Infrastructure for"
        titleSecond="Reliable Digital Solutions"
        description="Yulanto Web Creations is equipped with modern infrastructure advanced software, development systems, analytical tools, and testing technologies to deliver high-quality websites, e-commerce platforms, web applications, and graphic design solutions. Our technology-driven approach ensures every project is creative, responsive, reliable, and built to meet our clients’ business needs."
        animationType="text-reveal-lines"
        delay={300}

      />

      <div className={rowClass}>
        {images.map((image) => (
          <div
            key={`gallery-${image.id}`}
            className={image.colClasses}
          >
            <GalleryItem
              src={image.src}
              alt={image.alt}
              type={image.type}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default GalleryGrid;
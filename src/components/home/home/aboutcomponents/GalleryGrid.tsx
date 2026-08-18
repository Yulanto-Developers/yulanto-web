"use client";

import React, { useEffect } from "react";
import GalleryItem from "./GalleryItem";
import "./GalleryGrid.module.css";
import SectionTitle from "@/components/sectiontitle/SectionTitle";

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
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 1",
    type: "landscape",
    colClasses: "col-lg-8",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 2",
    type: "portrait",
    colClasses: "col-lg-4",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 3",
    type: "portrait",
    colClasses: "col-lg-4",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 4",
    type: "landscape",
    colClasses: "col-lg-8",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 5",
    type: "square",
    colClasses: "col-md-4",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 6",
    type: "square",
    colClasses: "col-md-4",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
    alt: "Gallery image 7",
    type: "square",
    colClasses: "col-md-4",
  },
];

const GalleryGrid = ({
  images = defaultImages,
  containerClass = "container py-5",
  rowClass = "row g-4",
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
        titleFirst="Yulanto Web Creations"
        titleSecond="is equipped with modern infrastructure"
        description="advanced software, development systems, analytical tools, and testing technologies to deliver high-quality websites, e-commerce platforms, web applications, and graphic design solutions. Our technology-driven approach ensures every project is creative, responsive, reliable, and built to meet our clients’ business needs."
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
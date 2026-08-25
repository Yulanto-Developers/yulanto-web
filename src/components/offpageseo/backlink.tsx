"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";

export interface OffPageServiceItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  iconClass: string;
  image: string;
}

const SERVICES_DATA: OffPageServiceItem[] = [
  {
    id: "1",
    title: "Strategic Link Building",
    tag: "Backlinks",
    iconClass: "fa-solid fa-link",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    description:
      "We identify relevant, authoritative, and industry-related websites to build quality backlinks that support your SEO objectives. Our approach focuses on relevance, authority, natural link placement, and long-term value rather than simply increasing backlink numbers.",
  },
  {
    id: "2",
    title: "Local SEO & Citation Building",
    tag: "Local SEO",
    iconClass: "fa-solid fa-location-dot",
    image:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80",
    description:
      "For businesses targeting customers in Chennai, local visibility is extremely important. Our local SEO services in Chennai include business citations, local directory optimization, location-based listings, and other strategies that help strengthen your local online presence.",
  },
  {
    id: "3",
    title: "Business Directory Submissions",
    tag: "Directories",
    iconClass: "fa-solid fa-folder-tree",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description:
      "We submit and optimize business information across relevant and trustworthy directories to improve brand visibility and maintain consistent business information across online platforms.",
  },
  {
    id: "4",
    title: "Guest Posting",
    tag: "Content Outreach",
    iconClass: "fa-solid fa-newspaper",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description:
      "Publishing useful and relevant content on authoritative websites can help establish industry expertise, generate referral traffic, and earn valuable backlinks.",
  },
  {
    id: "5",
    title: "Brand Mentions",
    tag: "Brand Awareness",
    iconClass: "fa-solid fa-bullhorn",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    description:
      "We work on increasing your brand's online visibility through relevant content, industry platforms, business profiles, and other digital channels where your target audience is active.",
  },
  {
    id: "6",
    title: "Competitor Backlink Analysis",
    tag: "Analysis",
    iconClass: "fa-solid fa-chart-bar",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    description:
      "Our SEO consultant in Chennai analyzes competitor backlink profiles to identify potential link opportunities, industry-specific platforms, content opportunities, and gaps in your current SEO strategy.",
  },
  {
    id: "7",
    title: "Content Promotion",
    tag: "Content Marketing",
    iconClass: "fa-solid fa-share-alt",
    image:
      "https://images.unsplash.com/photo-1432889821006-c0b2e7d04c9d?auto=format&fit=crop&w=800&q=80",
    description:
      "Creating valuable content is only part of SEO. We also focus on promoting useful website content through relevant online channels to increase its reach, visibility, and potential for earning natural backlinks.",
  },
  {
    id: "8",
    title: "Social Media Promotion",
    tag: "Social Media",
    iconClass: "fa-solid fa-share-nodes",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    description:
      "Social media activity can support brand awareness and content distribution. We use appropriate social platforms to promote valuable content and increase opportunities for audience engagement and brand discovery.",
  },
];

export default function OffPageSeoParallax() {
  // Split 8 items into exactly 2 equal rows of 4
  const firstRow = SERVICES_DATA.slice(0, 4);
  const secondRow = SERVICES_DATA.slice(4, 8);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 600]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -600]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.25, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-400, 200]),
    springConfig
  );

  return (
    <div
      ref={ref}
      style={{
        height: "220vh",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
       
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            width: "100%",
            padding: "0 1.5rem",
          }}
        >
          {/* Row 1 - Scroll Right */}
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              gap: "2rem",
              marginBottom: "2rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {firstRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={`row1-${idx}`}
              />
            ))}
          </div>

          {/* Row 2 - Scroll Left */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              width: "100%",
              justifyContent: "center",
            }}
          >
            {secondRow.map((product, idx) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={`row2-${idx}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Header() {
  return (
    <div
      style={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        padding: "0 1.5rem 3rem 1.5rem",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="px-project-title-box">
      
         <h4 className="px-about-title mb-20">
                  <span className="text-blue-about">Our Off-Page   </span>
                   SEO Services
                </h4>


        <p
          className="text-figtree text-black mt-2 "
         
        >
          As one of the professional SEO agencies in Chennai, we implement ethical and sustainable off-page SEO techniques that focus on long-term growth.
        </p>
      </div>
    </div>
  );
}

export function ProductCard({
  product,
  translate,
}: {
  product: OffPageServiceItem;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{
        x: translate,
        height: "380px",
        width: "320px",
        minWidth: "320px",
        maxWidth: "320px",
        flexShrink: 0,
        position: "relative",
        borderRadius: "1.25rem",
        overflow: "hidden",
        boxShadow: "0 15px 35px rgba(5, 52, 86, 0.15)",
        cursor: "pointer",
        border: "1px solid rgba(5, 52, 86, 0.1)",
      }}
      whileHover={{
        y: -12,
        transition: { duration: 0.25 },
      }}
    >
      {/* Background Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Dark Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(5, 52, 86, 0.95) 0%, rgba(5, 52, 86, 0.65) 55%, rgba(0, 0, 0, 0.25) 100%)",
          zIndex: 2,
        }}
      />

      {/* Card Content Overlay */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          height: "100%",
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        {/* Top Tag & Icon */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(6px)",
              color: "#ffffff",
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "0.35rem 0.75rem",
              borderRadius: "9999px",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {product.tag}
          </span>
          <div
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "0.75rem",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(6px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i
              className={product.iconClass}
              style={{ fontSize: "1.1rem", color: "#ffffff" }}
            />
          </div>
        </div>

        {/* Text Area */}
        <div>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "0.6rem",
              color: "#ffffff",
            }}
          >
            {product.title}
          </h3>
          <p
            style={{
              fontSize: "0.85rem !important",
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.88)",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
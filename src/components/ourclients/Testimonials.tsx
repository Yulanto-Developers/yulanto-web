"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

type Testimonial = {
  id: number;
  text: string;
  name: string;
  designation: string;
  accent: "brand" | "blue" | "dark";
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Working with Yulanto has been an excellent experience. Their team understood our business goals perfectly and delivered a modern, user-friendly website that exceeded our expectations. Their professionalism and attention to detail made the entire process smooth.",
    name: "Mr. Sri Sashidran K",
    designation: "Client",
    accent: "brand",
  },
  {
    id: 2,
    text: "Yulanto transformed our ideas into a beautiful and functional website. They were responsive throughout the project, met every deadline, and ensured every detail was implemented perfectly. I highly recommend them for web development services.",
    name: "Mr. Soundar Rajan V",
    designation: "Aerovan Express",
    accent: "blue",
  },
  {
    id: 3,
    text: "The Yulanto team delivered a professional website with excellent design and SEO optimization. Their technical expertise and commitment to quality helped improve our online presence. We are extremely satisfied with the final outcome.",
    name: "Mr. Antony Raja",
    designation: "Triumph Hub",
    accent: "dark",
  },
  {
    id: 4,
    text: "From planning to launch, Yulanto provided exceptional support. They listened to our requirements, suggested valuable improvements, and built a website that truly represents our brand. It has been a great investment for our business.",
    name: "Mr. Ganesh",
    designation: "Traventure Homes",
    accent: "brand",
  },
  {
    id: 5,
    text: "We've partnered with Yulanto on multiple projects, and they consistently deliver high-quality work. Their creative designs, technical expertise, and prompt support make them a reliable digital partner. Highly recommended.",
    name: "Mr. Prasanna",
    designation: "Flavor One",
    accent: "blue",
  },
  {
    id: 6,
    text: "The Yulanto team was professional, creative, and easy to work with. They understood our vision and developed a website that not only looks impressive but also performs exceptionally well. We appreciate their dedication and ongoing support.",
    name: "Mr. Raffi Barsoumian",
    designation: "Client",
    accent: "dark",
  },
];

const GOOGLE_ICON = "/home-assets/img/common/review--google-icon.webp";

const ACCENTS: Record<
  Testimonial["accent"],
  { background: string; color: string; border: string; sub: string }
> = {
  brand: {
    background: "#eef7f1",
    color: "#0b1f14",
    border: "1px solid #cfe8da",
    sub: "#4b6157",
  },
  blue: {
    background: "#2952e3",
    color: "#ffffff",
    border: "1px solid #2952e3",
    sub: "rgba(255,255,255,0.75)",
  },
  dark: {
    background: "#111111",
    color: "#ffffff",
    border: "1px solid #111111",
    sub: "rgba(255,255,255,0.65)",
  },
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function TestimonialCard({ item, index }: { item: Testimonial; index: number }) {
  const { ref, visible } = useReveal();
  const styleSet = ACCENTS[item.accent];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
      animate={
        visible
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 24, filter: "blur(6px)" }
      }
      transition={{ duration: 0.5, delay: index * 0.15 }}
      style={{
        background: styleSet.background,
        color: styleSet.color,
        border: styleSet.border,
        borderRadius: "16px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "260px",
      }}
    >
      <p style={{ margin: 0, fontSize: "15px", lineHeight: 1.7 }}>
        &ldquo;{item.text}&rdquo;
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginTop: "24px",
          paddingTop: "20px",
          borderTop: `1px solid ${
            item.accent === "brand" ? "rgba(11,31,20,0.1)" : "rgba(255,255,255,0.15)"
          }`,
        }}
      >
        <img
          src={GOOGLE_ICON}
          alt="Google Reviews"
          style={{ width: "36px", height: "36px", borderRadius: "50%", flexShrink: 0 }}
        />
        <div>
          <h4 style={{ margin: 0, fontSize: "15px", fontWeight: 700 }}>{item.name}</h4>
          <span style={{ fontSize: "13px", color: styleSet.sub }}>
            {item.designation}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ClientFeedback() {
  const headerReveal = useReveal();

  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "72px 24px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div
          ref={headerReveal.ref}
          initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          animate={
            headerReveal.visible
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: -16, filter: "blur(8px)" }
          }
          transition={{ duration: 0.5 }}
          style={{ maxWidth: "620px", margin: "0 auto 48px", textAlign: "center" }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "3px",
              color: "#50a778",
            }}
          >
            TESTIMONIALS
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "32px",
              fontWeight: 700,
              color: "#111111",
              letterSpacing: "-0.01em",
            }}
          >
            What our clients say
          </h2>
          <p style={{ marginTop: "12px", fontSize: "15px", color: "#6b7280" }}>
            Real feedback from businesses we've helped bring online.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {testimonials.map((item, i) => (
            <TestimonialCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
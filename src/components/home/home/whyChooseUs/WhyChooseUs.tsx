"use client";

import React, { useId } from "react";
import { motion } from "motion/react";
import { 
  Sparkles, 
  Lightbulb, 
  SlidersHorizontal, 
  Users, 
  Clock, 
  Headphones,
  Layout,
  Palette,
  Zap,
  Target,
  Compass,
  Cpu,
  UserCheck,
  Award,
  Calendar,
  CheckCircle2,
  LifeBuoy,
  Wrench,
  ShieldCheck,
  Layers,
  Code2,
  Rocket
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  centerImage: string; // Replaced centerIcon with image path/URL
  icons: LucideIcon[];
  xValues: number[];
  yValues: number[];
  paths: string[];
  delays: number[];
}

const features: FeatureCard[] = [
  {
    id: "quality",
    title: "Quality Design",
    description: "Quality is at the heart of everything we do. Every website we create reflects our commitment to modern design, usability, performance, and attention to detail.",
    centerImage: "/images/quality-design.png", // Update with your image path
    icons: [Sparkles, Layout, Code2],
    xValues: [120, 440, 282],
    yValues: [95, 85, 345],
    paths: [
      "M 270 215 V 110 Q 270 95 255 95 H 120",
      "M 294 215 V 100 Q 294 85 309 85 H 440",
      "M 282 215 V 345"
    ],
    delays: [0.1, 0.2, 0.3],
  },
  {
    id: "innovative",
    title: "Innovative Approach",
    description: "We continuously explore new ideas, technologies, and creative approaches throughout every stage of development. Our innovative mindset helps us create distinctive digital experiences that make your brand stand out.",
    centerImage: "/images/innovative-approach.png",
    icons: [Zap, Compass, Rocket],
    xValues: [140, 440, 282],
    yValues: [215, 215, 345],
    paths: [
      "M 250 215 H 140",
      "M 314 215 H 440",
      "M 282 215 V 345"
    ],
    delays: [0.1, 0.2, 0.3],
  },
  {
    id: "customized",
    title: "Customized Solutions",
    description: "We take the time to understand your business, objectives, and unique requirements. Our customized solutions are thoughtfully designed to address your specific needs and deliver meaningful results.",
    centerImage: "/images/customized-solutions.png",
    icons: [Target, Cpu, Layers],
    xValues: [120, 440, 440],
    yValues: [95, 95, 335],
    paths: [
      "M 270 215 V 110 Q 270 95 255 95 H 120",
      "M 294 215 V 110 Q 294 95 309 95 H 440",
      "M 314 225 V 320 Q 314 335 329 335 H 440"
    ],
    delays: [0.1, 0.2, 0.3],
  },
  {
    id: "team",
    title: "Professional Team",
    description: "Our team of skilled and experienced web designers and developers combines creativity, technical expertise, and industry knowledge to build professional websites that perform effectively.",
    centerImage: "/images/professional-team.png",
    icons: [UserCheck, Award, ShieldCheck],
    xValues: [140, 440, 282],
    yValues: [215, 215, 345],
    paths: [
      "M 250 215 H 140",
      "M 314 215 H 440",
      "M 282 215 V 345"
    ],
    delays: [0.1, 0.2, 0.3],
  },
  {
    id: "delivery",
    title: "On-Time Delivery",
    description: "We understand the importance of deadlines in business. Our structured approach to project management helps us maintain timelines and deliver projects efficiently, with a commitment to promise less and deliver more.",
    centerImage: "/images/on-time-delivery.png",
    icons: [Calendar, CheckCircle2, Zap],
    xValues: [120, 440, 440],
    yValues: [95, 95, 215],
    paths: [
      "M 270 215 V 110 Q 270 95 255 95 H 120",
      "M 294 215 V 110 Q 294 95 309 95 H 440",
      "M 314 215 H 440"
    ],
    delays: [0.1, 0.2, 0.3],
  },
  {
    id: "support",
    title: "Reliable Support",
    description: "Our relationship with you doesn't end after your website goes live. Our dedicated technical support team is always ready to assist with maintenance, updates, troubleshooting, and ongoing website requirements.",
    centerImage: "/images/reliable-support.png",
    icons: [LifeBuoy, Wrench, ShieldCheck],
    xValues: [140, 282, 440],
    yValues: [215, 345, 335],
    paths: [
      "M 250 215 H 140",
      "M 282 215 V 345",
      "M 314 225 V 320 Q 314 335 329 335 H 440"
    ],
    delays: [0.1, 0.2, 0.3],
  },
];

const AnimatedPath = ({ d, id }: { d: string; id: string }) => (
  <>
    <path d={d} stroke="currentColor" strokeWidth="1" fill="none" style={{ stroke: "#e5e7eb" }} />
    <motion.path
      d={d}
      stroke={`url(#${id})`}
      strokeWidth="2"
      fill="none"
      strokeDasharray="40 160"
      initial={{ strokeDashoffset: 200 }}
      animate={{ strokeDashoffset: -200 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: Math.random() * 2 }}
    />
    <defs>
      <linearGradient id={id} gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="50%" stopColor="#53ae7d" stopOpacity="0.5" />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>
  </>
);

export default function WhyChooseUsGrid() {
  const baseId = useId();

  return (
    <section className="px-about-6-area pt-40 pb-40 pb-lg-110">
      <div className="container container-1550">
        <div className="row align-items-center" data-aos="fade-up">
          <div className="col-xl-3">
            <span className="tp-section-subtitle text-black blink-ball">
              Why Choose Yulanto?
            </span>
          </div>

          <div className="col-xl-9">
            <div className="px-project-title-box">
              <h4 className="px-about-title mb-20">
                <span className="text-blue-about">We Create Meaningful </span>Websites
              </h4>
              <p className="text-figtree text-black mt-2">
                At Yulanto, we create high-performance websites and digital solutions that add real value to your products and services. Our goal is to strengthen your online presence, engage your audience, and support sustainable business growth.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          {features.map((item, index) => {
            const cardId = `${baseId}-${index}`;

            return (
              <motion.div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.08)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{
                  width: "100%",
                  backgroundColor: "#ffffff",
                  border: "1px solid #eaeaea",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* Visual Container */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "564 / 360",
                    width: "100%",
                    backgroundColor: "rgba(248, 249, 250, 0.5)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Background Dots */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: 0.2,
                      backgroundImage: "radial-gradient(circle, #002d46 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      pointerEvents: "none",
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.6) 10%, transparent 50%, rgba(255,255,255,0.6) 90%)",
                    }}
                  />

                  {/* SVG Connection Lines */}
                  <svg
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
                    viewBox="0 0 564 430"
                    fill="none"
                  >
                    {item.paths.map((pathStr, pIdx) => (
                      <AnimatedPath key={`${cardId}-path-${pIdx}`} d={pathStr} id={`${cardId}-path-${pIdx}`} />
                    ))}
                  </svg>

                  {/* Center Node with Image */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      zIndex: 20,
                      display: "flex",
                      height: "72px",
                      width: "72px",
                      transform: "translate(-50%, -50%)",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "20px",
                      border: "1px solid #eaeaea",
                      backgroundColor: "#ffffff",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                      overflow: "hidden",
                      padding: "10px"
                    }}
                  >
                    <img 
                      src={item.centerImage} 
                      alt={item.title} 
                      style={{ width: "100%", height: "100%", objectFit: "contain" }} 
                    />
                    <motion.div
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "20px",
                        border: "2px solid rgba(83, 174, 125, 0.2)",
                        pointerEvents: "none",
                      }}
                      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>

                  {/* Peripheral Nodes (3 Icons per Card) */}
                  {item.icons.map((IconComponent, iconIdx) => (
                    <motion.div
                      key={`${cardId}-icon-${iconIdx}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: item.delays[iconIdx] }}
                      style={{
                        position: "absolute",
                        left: `${(item.xValues[iconIdx] / 564) * 100}%`,
                        top: `${(item.yValues[iconIdx] / 430) * 100}%`,
                        zIndex: 10,
                        display: "flex",
                        height: "48px",
                        width: "48px",
                        transform: "translate(-50%, -50%)",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "12px",
                        border: "1px solid #eaeaea",
                        backgroundColor: "#ffffff",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                        color: "#53ae7d",
                      }}
                    >
                      <IconComponent style={{ width: "22px", height: "22px" }} />
                    </motion.div>
                  ))}
                </div>

                {/* Card Content Section */}
                <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px", flexGrow: 1, justifyContent: "space-between" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "600", fontFamily: '"Tenor Sans", "Tenor Sans Fallback"', color: "#002d46", margin: 0, letterSpacing: "-0.01em" }}>
                      {item.title}
                    </h3>
                    <span style={{ fontSize: "14px !important", fontFamily: "Figtree, Figtree Fallback", lineHeight: "1.6", color: "$666666", margin: 0 }}>
                      {item.description}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}